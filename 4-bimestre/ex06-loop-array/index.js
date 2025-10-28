// CRIE UMA LÓGICA AQUI

const prompt = require('prompt-sync')();

console.log("=== Sistema de Controle de Produção ===");

// --- Lê a quantidade de dias ---
const qtdDias = Number(prompt("Quantos dias deseja registrar? "));

// --- Lê as produções diárias ---
let producoes = [];

for (let i = 1; i <= qtdDias; i++) {
  let producaoDia = Number(prompt(`Digite a quantidade produzida no dia ${i}: `));


// === NÃO MODIFIQUE NADA ABAIXO ============
module.exports = resultado