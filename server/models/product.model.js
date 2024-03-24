const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const ProductSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Por Favor minimo 3 caracteres en el Nombre del Producto"],
        maxlength: [50, "Máximo 50 caracteres en el Nombre del Producto"]
    },
    precio: {
        type: Number,
        required: true,
        min: [0, 'Por Favor ingrese un valor valido']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "Por Favor minimo 10 caracteres en la descripción"],
        maxlength: [100, "Máximo 100 caracteres en el descripción del Producto"]
    }
}, {
    timestamps: true,
});

ProductSchema.plugin(uniqueValidator)
const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;