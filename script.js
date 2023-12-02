const titulo = document.getElementById("titulo")
console.log(titulo)

// const tituloTag = document.getElementsByTagName("h1")
// console.log(tituloTag)

const classTitle = document.getElementsByClassName("titulo-javascript")
console.log(classTitle)


const subTitle = document.querySelectorAll("h2")
console.log(subTitle)

const arryElements = document.querySelectorAll(".lista ul li")
console.log(arryElements)

function trocarCor(){
  console.log('trocou')
}

function enviar(){
  console.log("enviou")
}

const button = document.getElementById("enviar-form")

button.addEventListener("click", enviar)