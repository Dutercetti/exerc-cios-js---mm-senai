// construir menu para escolher um dos exercícios anteriores para ser executado para ser executado. 
// Faça com que repita com sua execução
// disponibilize as opções para o usuário até que seja digitado sair

function saudacao() {

    let username = prompt("Digite um nome de usuário: ");

//solicita ao usuário uma senha

    let senha = prompt("Insira sua senha: ");

//verifique se o nome de usuário é "admin" e a senha é "senha 123"
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não

    if ( username == "aluno" && senha == "senha123"){
    console.log("Login bem sucedido!")
    } else {
    console.log("Acesso não permitido")
    }

    let horaAtual = new Date().getHours()
    
    if (horaAtual > 6 && horaAtual < 13){
        window.alert("Bom dia," + username + "!")
    } else if (horaAtual >= 13 && horaAtual < 18){
        window.alert("Boa tarde," + username + "!")
    } else {
        window.alert("Boa noite," + username + "!")
    }
    
    window.alert("Bom dia," + username + "!")

}

function media() {    
    
let nota1 = parseFloat(prompt("Insira sua nota"))

let nota2 = parseFloat(prompt("Insira sua nota"))

let nota3 = parseFloat(prompt("Insira sua nota"))

let nota4 = parseFloat(prompt("Insira sua nota"))

// realizar calculo de média

media = ((nota1 + nota2 + nota3 + nota4) / 2)

if ((nota1 + nota2 + nota3 + nota4 / 2) >= 7){
    window.alert("Aluno Aprovado! Sua média é: " + media)
} else {
    window.alert("Aluno Reprovado, sua média é: " + media)
}
}

function imc(){
    let peso = parseFloat(prompt("Informe o sue peso (em kg): "));

let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

let imc = peso / (altura*altura);

console.log("seu IMC é: " + imc)

if(imc < 18.5){
    console.log("Abaixo do peso.");
}
else if (imc >= 18.5 && imc <= 24.9){
    console.log("Peso normal.")
}
else if (imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso.")
}
else if (imc >= 30.0 && imc <= 34.9){
    console.log("Obesidade grau 1.")
}
else if (imc >= 35.0 && imc <= 39.9){
    console.log("Obesidade grau 2.")
}
else if (imc >= 40.0){
    console.log("Obesidade grau 3.")
}
}

saudacao()

let opcao = window.prompt("MENU\nDigite a opção desejada: n\n1- media")
let opcao2 = window.prompt("MENU\nDigite a opção desejada: n\n2- IMC")

switch (opcao){
    case "1":
        media()
        break;

        case "2":
            imc()
            break;
            default:
                break
}