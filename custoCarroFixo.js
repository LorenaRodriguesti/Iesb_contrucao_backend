const prompt = require('prompt-sync')();

const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));

const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;


const custoFinal = custoFabrica * (1 + percentualDistribuidor + percentualImpostos);

console.log('Custo final ao consumidor:', custoFinal.toFixed(2));
