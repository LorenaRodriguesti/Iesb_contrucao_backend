const prompt = require('prompt-sync')();

const numeroCarrosVendidos = parseInt(prompt('Digite o número de carros vendidos: '));
const valorTotalVendas = parseFloat(prompt('Digite o valor total das vendas: '));
const salarioFixo = parseFloat(prompt('Digite o salário fixo do vendedor: '));
const valorPorCarroVendido = parseFloat(prompt('Digite o valor por carro vendido: '));

const comissaoCarros = numeroCarrosVendidos * valorPorCarroVendido;
const comissaoVendas = valorTotalVendas * 0.05;
const salarioFinal = salarioFixo + comissaoCarros + comissaoVendas;

console.log('Salário final do vendedor:', salarioFinal.toFixed(2));
