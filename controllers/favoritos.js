const {
  getTodosFavoritos,
  insereFavorito,
  deletaFavoritoPorId,
} = require("../services/favoritos.js");

function getFavoritos(req, res) {
  try {
    const livros = getTodosFavoritos();
    res.status(200).send(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function postFavorito(req, res) {
  try {
    insereFavorito(req.params.id);
    res.status(201).send("Livro inserido com sucesso");
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
}

function deleteFavorito(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deletaFavoritoPorId(id);
      res.send("Livro deletado com sucesso");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
}

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito,
};
