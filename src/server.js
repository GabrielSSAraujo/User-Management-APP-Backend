const express = require("express");
const routes = require("./routes");
const { sequelize } = require('./app/models');
const cors = require("cors");

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

//faz coneção com o banco;

sequelize.sync();

module.exports = app;