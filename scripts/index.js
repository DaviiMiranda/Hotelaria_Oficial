// index.js
const db = require('./db');
const { calcularIdade, calcularDiasHospedagem } = require('./hospedes1');

db.query('SELECT nome, nascimento, checkin, checkout FROM hospedes1', (err, results) => {
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
