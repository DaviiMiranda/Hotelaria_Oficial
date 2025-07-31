// index.js
const express = require('express');

const db = require('./db'); // Conexão com MySQL
const cors = require('cors');
const { request } = require('http');
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env


const app = express();
app.use(express.json());
app.use(cors());

app.delete("/hospedes/:id", async (req, res) => {
  const id = await parseInt(request.params.id)
  db.deleteHospede(id);
  res.sendStatus(204);
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
    res.status(201).json({ message: "Hóspede criado com sucesso!" });
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

app.post("/reservas", async (req, res) => {
  const reserva = req.body;
    await db.reservar(reserva);
    res.status(201).json({ message: "Reserva criada com sucesso!" });
});

app.listen(process.env.PORT,() => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
