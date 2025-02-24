const data = new Date();

const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];


const diaSemana = diasSemana[data.getDay()];
const diaDoMes = data.getDate();
const mes = meses[data.getMonth()];
const ano = data.getFullYear();

alert(`${diaSemana}, ${diaDoMes} de ${mes} de ${ano}`);
