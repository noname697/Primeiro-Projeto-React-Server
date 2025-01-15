const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).send("Olá mundo!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
