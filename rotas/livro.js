const { Router } = require("express");
const { getLivros } = require("../controllers/livro");

const router = Router();

router.get("/", (req, res) => getLivros(req, res));

router.post("/", (req, res) => {
  res.status(201).send("Você fez uma requisição do tipo POST");
});

router.patch("/", (req, res) => {
  res.status(201).send("Você fez uma requisição do tipo PATCH");
});

router.delete("/", (req, res) => {
  res.status(204).send("Você fez uma requisição do tipo DELETE");
});

module.exports = router;
