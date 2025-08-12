const app = require('./app.js');
const PORT = process.env.PORT || 3000;

// Aqui fica o .listen()
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});