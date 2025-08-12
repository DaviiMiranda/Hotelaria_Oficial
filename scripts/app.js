const express = require('express');
const db = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.delete('/hospedes/:cpf', async (req, res) => {
  try {
    console.log('Tentando deletar CPF:', req.params.cpf);
    // Sua lógica de deletar
    const resultado = await db.deleteHospede(req.params.cpf);
    
    if (resultado) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Hóspede não encontrado' });
    }
    
  } catch (error) {
    console.error('Erro ao deletar hóspede:', error);
    res.status(500).json({ error: error.message });
  }
});

app.patch("/hospedes/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    const hospede = req.body;
    db.updateHospede(id,hospede);
    res.sendStatus(200);
});

app.post("/hospedes", async (req, res) => {
    const hospede =  req.body;
    console.log(req.body)
    await db.insertHospede(hospede);
    res.status(201).json({ message: "Hóspede criado com sucesso! ${hospede.cpf}", cpf: hospede.cpf });
});

app.get("/hospedes", async (req, res) => {
    const result = await db.hospedes();
 
    res.json(result);
});

app.get("/",  (req, res, next) => {
    res.json({
        message: "API de Hotelaria ativa",
    })
 })

app.get("/hospede/:id", async (req, res, next) => {
  const id = parseInt(request.params.id)
  res.json(db.hospede(id));
});

app.post("/reservar", async (req, res) => {
  const reserva = req.body;
  const dis = await db.verificarDisponibilidadeQuarto(reserva); 
  if (dis) {
    await db.reservar(reserva);
    res.status(201).json({ message: "Reserva criada com sucesso! Com o Quarto numero:"+ dis });
  }
  else {
    res.status(400).json({ message: "Quarto não disponível para as datas selecionadas." });
  }
});

app.post("/reservaRapida", async (req, res) => {
  const reserva = req.body;
  const dis = await db.verificarDisponibilidadeQuarto(reserva);
  if (dis) {
    await db.reservaRapida(reserva);
    res.status(201).json({ message: "Reserva Rapida criada com sucesso! Com o Quarto numero:"+ dis });
  }
  else {
    res.status(400).json({ message: "Quarto não disponível para as datas selecionadas." });
  }

});

app.post("/cancelarReserva/:id", async (req, res) => { 
  const id = parseInt(request.params.id)
  db.cancelarReserva(id);
  res.status(200).json({ message: "Reserva cancelada com sucesso!" });
});

app.get("/quartos", async (req, res) => {
  const quartos = await db.quartos();
  res.json(quartos);
});


module.exports = app;