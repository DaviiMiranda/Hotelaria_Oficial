const request = require('supertest');
const app = require('../scripts/app.js'); // seu arquivo principal da API

describe('Testes da API de Hóspedes', () => {
  const cpfHospede = '12345678900'; // CPF fixo para o teste

  it('Deve cadastrar um novo hóspede', async () => {
    const res = await request(app)
      .post('/hospedes')
      .send({
        nome: 'João Silva',
        cpf: cpfHospede,
        telefone: '99999-9999',
        email: '1234@gmail.com',
        data_checkin: '2023-10-01',
        data_checkout: '2023-10-05',
        nascimento: '1990-01-01',
        quarto: 'Solteiro'
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('cpf', cpfHospede);
     if (res.body.message) {
      // Se retorna apenas message
      expect(res.body).toHaveProperty('message');
    } else {
      // Se retorna os dados do hóspede
      expect(res.body).toHaveProperty('cpf', cpfHospede);
    }
  });

  it('Deve listar os hóspedes', async () => {
    const res = await request(app).get('/hospedes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });


  it('Deve excluir o hóspede', async () => {
    // 1. Primeiro CRIAR o hóspede
    const res1 = await request(app)
      .post('/hospedes')
      .send({
        nome: 'João Silva',
        cpf: cpfHospede,
        telefone: '99999-9999',
        email: '1234@gmail.com',
        data_checkin: '2023-10-01',
        data_checkout: '2023-10-05',
        nascimento: '1990-01-01',
        quarto: 'Solteiro'
      });
    expect(res1.status).toBe(201);
    expect(res1.body).toHaveProperty('cpf', cpfHospede);
    // 2. Depois EXCLUIR o hóspede


    const res = await request(app).delete(`/hospedes/${cpfHospede}`);
    
    console.log('DELETE ERROR:', res.text);
    expect(res.status).toBe(204);
  });
});
