const { PORT } = require("./config/settings");
const express = require("express");
const app = express();
const cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config')
// Esto sirve para darle la ruta base a UserRoutes entonces desde ahi creamos el enrutamiento a partir de ahi ya sin repetir

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./config/mongoose.config'); // This is new

const ProductRouter = require("./routes/product.routes")
app.use("/api/product", ProductRouter)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));