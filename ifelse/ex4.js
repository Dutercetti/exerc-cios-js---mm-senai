// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

// solicitar as 4 notas do aluno

let nota1 = parseFloat(prompt("Insira sua nota"))

let nota2 = parseFloat(prompt("Insira sua nota"))

let nota3 = parseFloat(prompt("Insira sua nota"))

let nota4 = parseFloat(prompt("Insira sua nota"))

// realizar calculo de média

if ((nota1 + nota2 + nota3 + nota4 / 2) <= 7){
    console.log("Aluno Aprovado")
}
