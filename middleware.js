// middleware/exampleMiddleware.js

const exampleMiddleware = (req, res, next) => {
  console.log('Este é um middleware de exemplo');
  next();
};

module.exports = exampleMiddleware;
 
