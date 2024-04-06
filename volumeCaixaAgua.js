const prompt = require('prompt-sync')();

const raio = parseFloat(prompt('Digite o raio da caixa d\'água: '));
const altura = parseFloat(prompt('Digite a altura da caixa d\'água: '));

const volume = Math.PI * Math.pow(raio, 2) * altura;

console.log('Volume da caixa d\'água:', volume.toFixed(2));
