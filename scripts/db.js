// db.js
const mysql = require('mysql2/promise');
const { calcularDiasHospedagem, calculoValorTotal } = require('./functions.js');
const client = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234", // <<< coloque aqui
  database: "Hotel_Overlook"
});

async function verificarDisponibilidadeQuarto(hospede) {
  const reservas = await client.query('SELECT * FROM quartos where tipo = ? AND numero NOT IN ( SELECT id_quarto FROM reservas WHERE status = "Ativa" AND (data_checkin < ? AND data_checkout > ?) );', [hospede.quarto, hospede.data_checkin, hospede.data_checkout]);
  return reservas[0].length === 0; // Retorna true se não houver reservas ativas nesse quarto

}

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

async function reservar(hospede) {
  const x = await client.query('select * from hospedes1 where cpf = ?;', [hospede.cpf]);
  if (x[0].length === 0) {
    const dias = calcularDiasHospedagem(hospede.data_checkin, hospede.data_checkout);
    const valor_total = calculoValorTotal(dias, hospede.quarto);
    const values = [hospede.id, hospede.nome, hospede.data_checkin, hospede.data_checkout,valor_total, "ativa"];
    await client.query('INSERT INTO reservas (id_hospede, id_quarto, data_checkin, data_checkout, valor_total, status) VALUES (?, ?, ?, ?, ?, ?);', values);
  } else {
    throw new Error('Hóspede já cadastrado com este CPF(FAÇA RESERVA RÁPIDA)');
  }

  }

async function reservaRapida(hospede) {
  
  const dias = calcularDiasHospedagem(hospede.data_checkin, hospede.data_checkout);
  const valor_total = calculoValorTotal(dias, hospede.quarto);
  await client.query('INSERT INTO reservas (id_hospede, id_quarto, data_checkin, data_checkout, valor_total, status) VALUES (?, ?, ?, ?, ?, ?);', [hospede.cpf, hospede.quarto, hospede.data_checkin, hospede.data_checkout, valor_total, "ativa"]);
  await client.query('UPDATE quartos SET ocupado = 1 WHERE id = ?;', [hospede.quarto]);
}

async function cancelarReserva(id) {
  await client.query('UPDATE reservas SET status = "Cancelada" WHERE id = ?;', [id]);

}
module.exports =  { hospedes, hospede, insertHospede, updateHospede, deleteHospede, reservar, reservaRapida, verificarDisponibilidadeQuarto, cancelarReserva, client };
