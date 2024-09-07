const express = require("express");
const { getProducts, getSingleProduct, postProduct } = require("../Controllers/products-controller");
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getSingleProduct);

router.post("/", postProduct);

module.exports = router;