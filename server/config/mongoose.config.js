const mongoose = require("mongoose");
const db_name = "base_de_Productos";

mongoose.connect(`mongodb://localhost/${db_name}`)
    .then(() => { console.log(`Conexión Establecida con el servidor ${db_name}`) })
    .catch(() => { console.log(`La conexión Falló con el servidor ${db_name}`, err) })