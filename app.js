const express = require("express");
const rotaLivro = require('./rotas/livro')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Escutando a porta ${PORT}`);
});
