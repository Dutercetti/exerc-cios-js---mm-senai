// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

//solicita ao usuário um nome

let username = prompt("Digite um nome de usuário: ");

//solicita ao usuário uma senha

let senha = prompt("Insira sua senha: ");

//verifique se o nome de usuário é "admin" e a senha é "senha 123"
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não

if ( username == "admin" && senha == "senha123"){
    console.log("Login bem sucedido!")
} else {
    console.log("Acesso não permitido")
}

