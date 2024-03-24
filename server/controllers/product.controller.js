const ProductModel = require('../models/product.model');

module.exports = {
    createNewProduct: (req, res) => {
        ProductModel.create(req.body)
            .then(newlyCreatedProduct => res.status(201).json({ Product: newlyCreatedProduct }))
            .catch(err => res.status(400).json({ message: "Something went wrong creating the product", error: err })
            );
    },
    // getAllProducts: (req, res) => {
    //     ProductModel.find()
    //         .then((allProducts) => res.status(200).json({ Product: allProducts }))
    //         .catch((err) =>
    //             res.status(400).json({ message: "Something went wrong", error: err })
    //         );
    // },
    // getOneProductById: (req, res) => {
    //     ProductModel.findOne({ _id: req.params.id })
    //         .then((OneElement) => res.status(200).json({ Product: OneElement }))
    //         .catch((err) => res.status(400).json({ message: "Algo no funciono correctamente", error: err }))
    // },
    // updateProduct: (req, res) => {
    //     ProductModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // si no le ponemos el new:true te devuelve el anterior
    //         .then((UpdatedProduct) => res.json({ Product: UpdatedProduct }))
    //         .catch((err) => res.json({ message: "Algo no funciono como se esperaba", error: err }))
    // },
    // deleteProductById: (req, res) => {
    //     ProductModel.deleteOne({ _id: req.params.id })
    //         .then((result) => res.json({ result: result }))
    //         .catch((err) => res.json({ message: 'Algo no funciono correctamente :(', error: err }))
    // },
}