// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("Digite um númeror para gerar uma tabuada"));

if(!isNaN(numero)) {
for (let contador = 0; contador <= 10; contador ++) {
        console.log(numero + "X" + contador + "=" + (contador * numero));
    }
}else{
    console.log("Número inválido.Por favor, digite um número.")
}
