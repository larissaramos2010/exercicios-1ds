// CRIE UMA LÓGICA ABAIXO

// === Sistema de Controle de Produção ===

const prompt = require("prompt-sync")()

console.log("=== Sistema de Controle de Produção ===\n")


const dias = parseInt(prompt("Quantos dias deseja registrar? "))


// Cria um array para armazenar as produções

const producao = []

for (let i = 0; i < dias; i++) {
    const qtd = parseFloat(prompt(`Digite a quantidade produzida no dia ${i + 1}: `))
    producao.push(qtd)
}
// ...existing code...

const total = producao.reduce((acc, val) => acc + val, 0)
const media = total / dias
const maior = Math.max(...producao)
const menor = Math.min(...producao)
const diaMaior = producao.indexOf(maior) + 1
const diaMenor = producao.indexOf(menor) + 1

const ordemCrescente = [...producao].sort((a, b) => a - b)
const ordemDecrescente = [...producao].sort((a, b) => b - a)


console.log("\n--- RELATÓRIO DE PRODUÇÃO ---")
console.log(`Produções registradas: [${producao.join(", ")}]`)
console.log(`Total produzido: ${total} peças`)
console.log(`Média diária: ${media.toFixed(2)}`)
console.log(`Maior produção: ${maior} (dia ${diaMaior})`)
console.log(`Menor produção: ${menor} (dia ${diaMenor})`)
console.log(`Ordem crescente: [${ordemCrescente.join(", ")}]`)
console.log(`Ordem decrescente: [${ordemDecrescente.join(", ")}]`)


if (media >= (maior / 2)) {
    console.log("Produção estável!")
} else {
    console.log("Produção abaixo do ideal.")
}
