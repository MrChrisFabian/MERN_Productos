const express = require("express");

const { createNewProduct, getAllProducts, getOneProductById, deleteProductById, updateProduct } = require('../controllers/product.controller')

const ProductRouter = express.Router();

ProductRouter.post("/", createNewProduct);
ProductRouter.get("/", getAllProducts);
ProductRouter.get("/:id", getOneProductById);
ProductRouter.put("/:id", updateProduct)
ProductRouter.delete("/:id", deleteProductById)
module.exports = ProductRouter;