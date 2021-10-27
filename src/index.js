require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

const app = require("./server");

app.listen(8000, () => {
  console.log(`Exemplo da aplicação em http://localhost:8000`);
});

module.exports = app;
