

function adicionar(){
  const lista = document.querySelector('.lista')

  //console.log(lista.children[0])   //elementos que são filhos dessa lista <ul>

  //lista.innerHTML += "<li>Item 3</li>" //adicionando um elemento na lista via js
  console.log(lista)

  //lista.children[0].innerHTML += "(Alterado)" //O inner remove todos os elementos da tela e vai montar novament.

  lista.children[0].append("(Alterado)") //Outra forma de alterar o HTML via JS. O append faz apenas alterar o elemento q vc está alterando sem mexer nos demais elementos

  const newItemList = document.createElement("li")
  newItemList.textContent = "Item 3"

  lista.appendChild(newItemList)

}