const express = require("express");

const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`Exemplo da aplicação em http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.send("Testing nodemoon");
});
