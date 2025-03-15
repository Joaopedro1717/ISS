const express = require("express");
const app = express();
const catRoutes = require("./routes/catRoutes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

// Definindo as rotas
app.use("/cat", catRoutes);

// Middleware de erro
app.use(errorHandler);

module.exports = app;

