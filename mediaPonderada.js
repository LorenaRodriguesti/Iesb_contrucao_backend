
const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt('Digite a primeira nota: '));
const nota2 = parseFloat(prompt('Digite a segunda nota: '));

const mediaFinal = (nota1 * 4 + nota2 * 6) / (4 + 6);

console.log('Média final:', mediaFinal.toFixed(2));
