

function adicionar(){
  const lista = document.querySelector('.lista')

  //console.log(lista.children[0])   //elementos que são filhos dessa lista <ul>

  lista.innerHTML += "<li>Item 3</li>" //adicionando um elemento na lista via js
  console.log(lista.innerHTML)
}