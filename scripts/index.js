// index.js
const express = require('express');
const app = express();
const path = require('path');
const db = require('./db'); // Conexão com MySQL
const cors = require('cors');
const PORT = 3000; // Definindo uma porta para o servidor

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const { calcularIdade, calcularDiasHospedagem } = require('./hospedes.js');

app.post('/hospedes1', (req, res) => {
  const { nome, email, cpf, quarto, nascimento, data_checkin, data_checkout } = req.body;

  const sql = `
    INSERT INTO hospedes1 
    (nome, email, cpf, quarto, nascimento, data_entrada, data_saida) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?)
  `;

  const valores = [nome, email, cpf, quarto, nascimento, data_checkin, data_checkout];

  db.query(sql, valores, (err, res) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      return res.status(500).json({ message: 'Erro ao cadastrar hóspede.' });
    }
    res.status(201).json({ message: 'Hóspede inserido com sucesso!' });
  });
});

db.query('SELECT nome, nascimento, data_checkin, data_checkout FROM hospedes1', (err, results) => {
  if (err) {
    console.error('Erro na consulta:', err);
    return;
  }

  results.forEach(hospede => {
    const idade = calcularIdade(hospede.nascimento);
    const dias = calcularDiasHospedagem(hospede.checkin, hospede.checkout);

    console.log(`\nHóspede: ${hospede.nome}`);
    console.log(`Idade: ${idade} anos`);
    console.log(`Dias de hospedagem: ${dias} dias`);
  });
});


db.query('SELECT * FROM hospedes1', (err, results) => {
  if (err) {
    console.error('Erro na consulta:', err);
    return;
  }

  console.log('Hospedes encontrados:', results);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}`);
  console.log(`Acesse http://localhost:${PORT} para ver seus arquivos estáticos.`);
});