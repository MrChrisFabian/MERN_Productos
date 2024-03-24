const express = require("express");

const { createNewProduct } = require('../controllers/product.controller')

const ProductRouter = express.Router();

//Cuando me piden el vacio ejecuto createNewUser
ProductRouter.post("/", createNewProduct);
// ProductRouter.get("/", getAllProducts);
// ProductRouter.get("/:id", getOneProductById);
// ProductRouter.put("/:id", updateProduct)
// ProductRouter.delete("/:id", deleteProductById)
module.exports = ProductRouter;