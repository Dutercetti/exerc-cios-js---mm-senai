// Substitui o conteúdo do body do documento HTML com um novo elemento <h1> com id "titulo" e texto "Titulo legal"
document.body.innerHTML = '<h1 id="titulo">Titulo legal</h1>'

// Obtém a referência do elemento <h1> pelo seu id "titulo" e armazena na variável titulo
let titulo = document.getElementById("titulo")

// Define a propriedade fontFamily do elemento titulo para "Segoe UI", mudando a fonte do texto
titulo.style.fontFamily = "Segoe UI"

// Define a propriedade color do elemento titulo para "red", mudando a cor do texto para vermelho
titulo.style.color = "red"

window.document.getElementById("titulo").style.color = "green"