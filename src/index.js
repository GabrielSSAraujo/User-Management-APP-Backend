const express = require("express");
const routes = require("./routes");
const { sequelize } = require("./Database/index");
const initDB = require("./Database/index");

const app = express();

const port = 8000;

app.use(express.json());
app.use("/", routes);

//faz coneção com o banco;

initDB().then(
  () => {
    console.info(`conectado ao banco de dados com sucesso`);
  },
  () => {
    console.error(`Nao conectado ao banco de dados`);
  }
);

app.listen(port, () => {
  console.log(`Exemplo da aplicação em http://localhost:${port}`);
});

module.exports = app;
