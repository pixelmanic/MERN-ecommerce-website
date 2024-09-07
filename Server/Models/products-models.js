const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    prevPrice: {
        type: String,
        required: false
    },
    images: {
        type: Array,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    colours: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modelSize: {
        type: Number,
        required: false
    },
    articleName: {
        type: String,
        required: true
    },
    composition: {
        type: String,
        required: true
    },
    care: {
        type: String,
        required: true
    },
    madeIn: {
        type: String,
        required: true
    },
    reviews: {
        type: Array,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: false
    },
    sale: {
        type: Boolean,
        required: false
    },
    stock: {
        type: Number,
        required: true
    },
})

const Products = new mongoose.model("All-Products", productSchema);

module.exports = Products;