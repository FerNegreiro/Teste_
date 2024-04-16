// app.js

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Define a especificação Swagger
const options = {
  definition: {
    openapi: '3.0.0', // Versão do OpenAPI Specification
    info: {
      title: 'API Documentation', // Título da documentação
      version: '1.0.0', // Versão da API
      description: 'Documentação da API', // Descrição da API
    },
  },
  // Define os arquivos que contêm os comentários de documentação
  apis: ['./routes/*.js'], // Arquivos de rota da sua API
};

const specs = swaggerJsdoc(options);

// Rota para servir a documentação do Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Outras configurações e rotas...

module.exports = app;
