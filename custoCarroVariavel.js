
const prompt = require('prompt-sync')();

const custoFabrica = parseFloat(prompt('Digite o custo de fábrica do carro: '));
const percentualDistribuidor = parseFloat(prompt('Digite a porcentagem do distribuidor: '));
const percentualImpostos = parseFloat(prompt('Digite a porcentagem dos impostos: '));

const custoFinal = custoFabrica * (1 + percentualDistribuidor / 100 + percentualImpostos / 100);

console.log('Custo final ao consumidor:', custoFinal.toFixed(2));
