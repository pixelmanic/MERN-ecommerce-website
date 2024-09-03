export default function FilterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTERED_PRODUCTS":
      return {
        ...state,
        filtered_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS": {
      const { filtered_products, sorting_value } = state;

      // Make a copy of the filtered products array to avoid mutating the state directly
      let tempSortProduct = [...filtered_products];

      // Custom shuffle function using the Fisher-Yates algorithm
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      // Sorting function based on the sorting_value
      const sortingProducts = (a, b) => {
        // Convert prices to numbers
        const priceA = parseFloat(a.price.replace(",", "."));
        const priceB = parseFloat(b.price.replace(",", "."));

        if (sorting_value === "lowToHigh") {
          return priceA - priceB;
        }
        if (sorting_value === "highToLow") {
          return priceB - priceA;
        }
        if (sorting_value === "new") {
          // Assuming createdAt is in a parseable date format like 'YYYY-MM-DDTHH:mm:ssZ'
          return new Date(b.id) - new Date(a.id);
        }
        // Default case if sorting_value doesn't match any expected value
        return 0;
      };

      if (sorting_value === "reco") {
        // Shuffle the products if sorting_value is "reco"
        tempSortProduct = shuffleArray(tempSortProduct);
      } else {
        // Perform sorting
        tempSortProduct = tempSortProduct.sort(sortingProducts);
      }

      // Return the new state with sorted or shuffled products
      return {
        ...state,
        filtered_products: tempSortProduct,
      };
    }

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_SEARCHED_PRODUCTS": {
      let {
        all_products,
        filters: { text },
      } = state;
      let tempFilterProducts = [...all_products];

      if (text.trim() !== "") {
        const searchValue = text.toLowerCase();
        const searchedProducts = tempFilterProducts.filter((product) =>
          product.title.toLowerCase().includes(searchValue)
        );
        return {
          ...state,
          searched_products: searchedProducts,
        };
      } else {
        return {
          ...state,
          searched_products: [],
        };
      }
    }

    case "CLEAR_SEARCH_VALUE":
      return {
        ...state,
        searched_products: [],
      };

    // case "FILTER_PRODUCTS": {
    //   const { all_products } = state;
    //   const filterValues = action.payload;
    //   let tempFilterProducts = [...all_products];

    //   const sizes = filterValues[0] || [];
    //   const categories = filterValues[1] || [];
    //   const colors = filterValues[2] || [];
    //   const prices = filterValues[3] || [];

    //   // If all filters are empty, return all products
    //   if (
    //     !sizes.length &&
    //     !categories.length &&
    //     !colors.length &&
    //     !prices.length
    //   ) {
    //     return {
    //       ...state,
    //       filtered_products: all_products,
    //     };
    //   }

    //   // Step 1: Filter by categories if any are specified
    //   if (categories.length > 0) {
    //     tempFilterProducts = tempFilterProducts.filter((product) =>
    //       categories.includes(product.category)
    //     );
    //   }

    //   // Step 2: Filter by sizes if any are specified
    //   if (sizes.length > 0) {
    //     tempFilterProducts = tempFilterProducts.filter(
    //       (product) =>
    //         product.sizes && product.sizes.some((size) => sizes.includes(size))
    //     );
    //   }

    //   // Step 3: Filter by colors if any are specified
    //   if (colors.length > 0) {
    //     tempFilterProducts = tempFilterProducts.filter(
    //       (product) =>
    //         product.colours &&
    //         product.colours.some((color) => colors.includes(color))
    //     );
    //   }

    //   // Step 4: Filter by price if specified
    //   if (prices.length === 2) {
    //     const [minPrice, maxPrice] = prices;
    //     tempFilterProducts = tempFilterProducts.filter((product) => {
    //       let productPrice = parseFloat(product.price.replace(",", "."));
    //       productPrice = Math.floor(productPrice);
    //       return productPrice >= minPrice && productPrice <= maxPrice;
    //     });
    //   }

    //   return {
    //     ...state,
    //     filtered_products: tempFilterProducts,
    //   };
    // }

    case "FILTER_PRODUCTS": {
      const { all_products, searched_products } = state;
      const { filterValues, filterType } = action.payload;

      // Determine which dataset to filter
      let tempFilterProducts =
        filterType === "SEARCH" ? [...searched_products] : [...all_products];
      const sizes = filterValues[0] || [];
      const categories = filterValues[1] || [];
      const colors = filterValues[2] || [];
      const prices = filterValues[3] || [];

      // If all filters are empty, return the original dataset
      if (
        !sizes.length &&
        !categories.length &&
        !colors.length &&
        !prices.length
      ) {
        return {
          ...state,
          filtered_products:
            filterType === "SEARCH" ? searched_products : all_products,
        };
      }

      // Step 1: Filter by categories if any are specified
      if (categories.length > 0) {
        tempFilterProducts = tempFilterProducts.filter((product) =>
          categories.includes(product.category)
        );
      }

      // Step 2: Filter by sizes if any are specified
      if (sizes.length > 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (product) =>
            product.sizes && product.sizes.some((size) => sizes.includes(size))
        );
      }

      // Step 3: Filter by colors if any are specified
      if (colors.length > 0) {
        tempFilterProducts = tempFilterProducts.filter(
          (product) =>
            product.colours &&
            product.colours.some((color) => colors.includes(color))
        );
      }

      // Step 4: Filter by price if specified
      if (prices.length === 2) {
        const [minPrice, maxPrice] = prices;
        tempFilterProducts = tempFilterProducts.filter((product) => {
          let productPrice = parseFloat(product.price.replace(",", "."));
          productPrice = Math.floor(productPrice);
          return productPrice >= minPrice && productPrice <= maxPrice;
        });
      }

      return {
        ...state,
        filtered_products: tempFilterProducts,
      };
    }

    case "WISHLIST_PRODUCT": {
      const { all_products, wishlist_products } = state;
      const id = action.payload;
    
      // Find the product by ID in all_products
      const productToToggle = all_products.find(product => product.id === id);
    
      // Check if the product is already in the wishlist
      const isProductInWishlist = wishlist_products.some(product => product.id === id);
    
      let updatedWishlist;
    
      if (isProductInWishlist) {
        // Remove the product if it's already in the wishlist
        updatedWishlist = wishlist_products.filter(product => product.id !== id);
      } else {
        // Add the product to the wishlist if it's not already there
        updatedWishlist = [...wishlist_products, productToToggle];
      }
    
      return {
        ...state,
        wishlist_products: updatedWishlist,
      };
    }    

    default:
      return state;
  }
}
