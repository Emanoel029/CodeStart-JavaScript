function alterar() {
  const input = document.querySelector("input");

  input.setAttribute("type", "text");

  const existeTypeAtribute = input.hasAttribute("type");

  console.log(existeTypeAtribute);

  //console.log(input.getAttribute("id"));
}

// (setAttribute) essa função é responsável por auterar o atributo dentro de um
// elemento.

/*(getAttribute) essa função mostra qual valor do atributo id, type.
(hasAttribute) verifica se o atributo existe (true/false)*/
