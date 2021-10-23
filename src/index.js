const express = require("express");
const routes = require("./routes");
const { sequelize } = require('./Model/index');

const app = express();

const port = 8000;

app.use(express.json());
app.use(routes);

//faz coneção com o banco;

sequelize.sync().then(
  () => {
    console.log(`conectado ao banco de dados com sucesso`);
  }
);

app.listen(port, () => {
  console.log(`Exemplo da aplicação em http://localhost:${port}`);
});

module.exports = app;
