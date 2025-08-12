function calcularIdade(dataNascimento) {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}
function calcularDiasHospedagem(dataEntrada, dataSaida) {
  const entrada = new Date(dataEntrada);
  const saida = new Date(dataSaida);
  const diff = saida - entrada;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return dias;
}
function calucularCustoTotal(dataEntrada, dataSaida, quarto) {
  
  const entrada = new Date(dataEntrada);
  const saida = new Date(dataSaida);
  const diff = saida - entrada;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));

    db.query(
      'SELECT preco FROM quartos WHERE tipo = ?',
      [quarto],
      (error, results) => {
        if (error) throw error;
        const preco = results[0].preco;
        const custoTotal = preco * dias;
        return custoTotal;
      }
    );
    
  }



module.exports = { calcularIdade,  calucularCustoTotal};