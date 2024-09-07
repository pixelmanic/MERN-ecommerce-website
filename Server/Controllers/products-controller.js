const Products = require("../Models/products-models");

const getProducts = async (req, res) => {
  try {
    res.status(200).send("All Products are here");
  } catch {
    res.status(404).send("not found");
  }
};

const getSingleProduct = async (req, res) => {
  try {
    res.status(200).send("here is the Single Product");
  } catch {
    res.status(404).send("no such Product");
  }
};

const postProduct = async (req, res) => {
  const {
    title,
    price,
    prevPrice,
    images,
    sizes,
    colours,
    description,
    modalSize,
    articleName,
    composition,
    care,
    madeIn,
    reviews,
    category,
    featured,
    sale,
    stock,
  } = req.body;

  try {
    const product = await Products.create({
      title,
      price,
      prevPrice,
      images,
      sizes,
      colours,
      description,
      modalSize,
      articleName,
      composition,
      care,
      madeIn,
      reviews,
      category,
      featured,
      sale,
      stock,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProducts, getSingleProduct, postProduct };
