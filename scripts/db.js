// db.js
const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel_overlook'
});

conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao banco hotel_overlook!');
  }
});

module.exports = conexao;
