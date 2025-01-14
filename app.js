const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.status(200).send("Olá mundo!");
});

app.listen(PORT, () => {
  console.log(`Escutando a porta ${PORT}`);
});
