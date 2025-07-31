// db.js
const mysql = require('mysql2/promise');
const client = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234", // <<< coloque aqui
  database: "Hotel_Overlook"
});

async function hospedes() {
  const hospedes = await client.query('SELECT * FROM hospedes1;');
  return hospedes[0]
}

async function hospede(id) {
  const hospedes = await client.query('SELECT * FROM hospedes1 WHERE id = ?;', [id] );
  return hospedes[0]
}

async function insertHospede(hospede) {
  const values = [hospede.nome, hospede.cpf, hospede.telefone, hospede.email, hospede.data_checkin, hospede.data_checkout, hospede.nascimento, hospede.quarto];
  await client.query('INSERT INTO hospedes1 (nome, cpf, telefone, email, data_checkin, data_checkout, nascimento, quarto) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', values);
}

async function updateHospede(id, updatedHospede) {
  const hospede = await client.query('SELECT * FROM hospedes1 WHERE id = ?;', [id] );
  if (!hospede) {
    throw new Error('Hospede not found');
  }
  hospede.nome = updatedHospede.nome;
  hospede.cpf = updatedHospede.cpf;
  hospede.telefone = updatedHospede.telefone;
  hospede.email = updatedHospede.email;
  hospede.data_checkin = updatedHospede.data_checkin;
  hospede.data_checkout = updatedHospede.data_checkout;
}
async function deleteHospede(id) {
  const values = [id]
  await client.query('DELETE FROM hospedes1 WHERE id = ?;', values);
  
}
module.exports =  { hospedes, hospede, insertHospede, updateHospede, deleteHospede, client };
