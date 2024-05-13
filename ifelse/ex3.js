// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

// solicitar número ao usuário

let numero = parseInt(prompt("Insira o número desejado: "))

// operação para definir se o número é par ou ímpar

if (numero % 2 == 0) {
    console.log("O número é par!")
} else {
    console.log("O número é ímpar!")
}

