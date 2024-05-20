// 1 - Alterar o texto de um paragrafo ao clicar em um botão
// 2 - Adicionar e remover itens de uma lista
// 3 - Fechar a página, voltar, mostrar sua localização 

//Seleciona o elemento com ID "titulo" do documento(document)
let titulo = window.document.getElementById("Exercício DOM")

//Difine a cor do texto do elemento "titulo"
titulo.style.color = "#FFC0CB"

//Define a tipografia do elemento 
titulo.style.fontFamily = "Montserrat"

// 1 - Alterar o texto de um paragrafo ao clicar em um botão

lista_paragrafos = ['OI!','VOCÊ','MUDOU','O TEXTO','DO', 'PARÁGRAFO!!!'];

const paragrafo = document.querySelector('.paragrafo');
const botao = document.querySelector('.botao');
var index = 0;

window.onload = function() {
    paragrafo.innerHTML = lista_paragrafos[index]
};

botao.addEventListener('click', () => {
    index == lista_paragrafos.length - 1 ? index = 0 : index++
    paragrafo.innerText = lista_paragrafos[index];
})