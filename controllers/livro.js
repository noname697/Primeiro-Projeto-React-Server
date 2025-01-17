const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  excluiLivro,
} = require("../services/livro.js");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.status(200).send(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.status(200).send(livro);
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    if(req.body.nome){
      insereLivro(livroNovo);
      res.status(201).send("Livro inserido com sucesso");
    }else{
      res.status(422).send("O campo nome é obrigatório");
    }
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      modificaLivro(req.body, id);
      res.status(200).send("Livro modificado com sucesso");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      excluiLivro(id);
      res.send("Livro deletado com sucesso");
    } else {
      res.status(422).send("ID inválido");
    }
  } catch (erro) {
    res.status(500).json({ message: erro.message });
  }
}

module.exports = { getLivros, getLivro, postLivro, patchLivro, deleteLivro };
