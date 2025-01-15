function getLivros(req, res) {
  try {
    res.status(200).send("Olá mundo!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getLivros };
