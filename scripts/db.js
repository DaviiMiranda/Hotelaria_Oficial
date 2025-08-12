// db.js
const mysql = require('mysql2/promise');
//const { calucularCustoTotal } = require('./functions.js');
const client = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234", // <<< coloque aqui
  database: "Hotel_Overlook"
});

function calucularCustoTotal(dataEntrada, dataSaida, quarto) {
  const entrada = new Date(dataEntrada);
  const saida = new Date(dataSaida);
  const diff = saida - entrada;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
    client.query(
      'SELECT valor_diaria FROM quartos WHERE tipo = ?',
      [quarto],
      (error, results) => {
        if (error) throw error;
        const preco = results[0].preco;
        const custoTotal = preco * dias;
        return custoTotal;
      }
    );
  }

async function verificarDisponibilidadeQuarto(hospede) {
  const [reservas] = await client.query(
    'SELECT numero FROM quartos WHERE tipo = ? AND numero NOT IN (SELECT id_quarto FROM reservas WHERE status = "Ativa" AND (data_checkin < ? AND data_checkout > ?))',
    [hospede.quarto, hospede.data_checkin, hospede.data_checkout]
  );

  if (reservas.length === 0) {
    return null; // Nenhum quarto disponível
  }

  return reservas[0].numero; // Retorna o número do primeiro quarto disponível
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
  await client.query('DELETE FROM hospedes1 WHERE cpf = ?;', values);
  
}

async function reservar(hospede) {
  const x = await client.query('select * from hospedes1 where cpf = ?;', [hospede.cpf]);
  const id_quarto = await verificarDisponibilidadeQuarto(hospede);
  if (x[0].length === 0 && id_quarto !== null) {

    await client.query('INSERT INTO hospedes1 (nome, cpf, telefone, email, data_checkin, data_checkout, nascimento, quarto) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [hospede.nome, hospede.cpf, hospede.telefone, hospede.email, hospede.data_checkin, hospede.data_checkout, hospede.nascimento, hospede.quarto]);

    const valor_total = calucularCustoTotal(hospede.data_checkin, hospede.data_checkout, hospede.quarto);
    const values = [hospede.cpf, id_quarto, hospede.data_checkin, hospede.data_checkout,valor_total, "ativa"];
    await client.query('INSERT INTO reservas (id_hospede, id_quarto, data_checkin, data_checkout, valor_total, status) VALUES (?, ?, ?, ?, ?, ?);', values);

    await client.query('UPDATE quartos SET ocupado = 1 WHERE numero = ?;', [id_quarto]);


  } else {
    throw new Error('Hóspede já cadastrado com este CPF(FAÇA RESERVA RÁPIDA)');
  }

  }

async function reservaRapida(hospede) {
  const x = await client.query('select * from hospedes1 where cpf = ?;', [hospede.cpf]);
  const id_quarto = await verificarDisponibilidadeQuarto(hospede);
  if (x[0].length === 0) {
    throw new Error('Hóspede já cadastrado com este CPF(FAÇA RESERVA NORMAL)');
  } else {
    const valor_total = calucularCustoTotal(hospede.data_checkin, hospede.data_checkout, hospede.quarto);
    await client.query('INSERT INTO reservas (id_hospede, id_quarto, data_checkin, data_checkout, valor_total, status) VALUES (?, ?, ?, ?, ?, ?);', [hospede.cpf, hospede.quarto, hospede.data_checkin, hospede.data_checkout, valor_total, "ativa"]);
    await client.query('UPDATE quartos SET ocupado = 1 WHERE id = ?;', [hospede.quarto]);
    await client.query('UPDATE quartos SET ocupado = 1 WHERE numero = ?;', [id_quarto]);
  }
}

async function cancelarReserva(id) {
  await client.query('UPDATE reservas SET status = "Cancelada" WHERE id = ?;', [id]);

}

async function quartos() {
  const quartos = await client.query('SELECT * FROM quartos;');
  return quartos[0]
}
module.exports =  { hospedes, hospede, insertHospede, updateHospede, deleteHospede, reservar, reservaRapida, verificarDisponibilidadeQuarto, cancelarReserva, quartos, client };
