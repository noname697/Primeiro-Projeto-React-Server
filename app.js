const express = require("express");
const rotaLivro = require('./rotas/livro')

const app = express();

app.use('/livros', rotaLivro)

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Escutando a porta ${PORT}`);
});
