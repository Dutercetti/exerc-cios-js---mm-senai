function saudacao() {

    let nomePessoa = prompt("Digite seu nome: ")

    let horaAtual = new Date().getHours()
    
    if (horaAtual > 6 && horaAtual < 13){
        window.alert("Bom dia," + nomePessoa + "!")
    } else if (horaAtual >= 13 && horaAtual < 18){
        window.alert("Boa tarde," + nomePessoa + "!")
    } else {
        window.alert("Boa noite," + nomePessoa + "!")
    }
    
    window.alert("Bom dia," + nomePessoa + "!")

}

saudacao()
saudacao ()