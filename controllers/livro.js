const { getTodosLivros } = require("../services/livro.js");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getLivros };
