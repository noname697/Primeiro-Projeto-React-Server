const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Olá mundo!");
});

router.post("/", (req, res) => {
  res.send("Você fez uma requisição do tipo POST");
});

router.put("/", (req, res) => {
  res.send("Você fez uma requisição do tipo PUT");
});

router.patch("/", (req, res) => {
  res.send("Você fez uma requisição do tipo PATCH");
});

router.delete("/", (req, res) => {
  res.send("Você fez uma requisição do tipo DELETE");
});

module.exports = router;
