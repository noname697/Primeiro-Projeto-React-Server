const fs = require("fs");

function getLivros(req, res) {
  try {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    res.send(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getLivros };
