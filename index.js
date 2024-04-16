// index.js

const express = require('express');
const app = express();

// Configuração do aplicativo...
// Definição de rotas...
// Uso de middlewares...

// Porta em que o servidor irá escutar
const port = process.env.PORT || 3000;

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
 
