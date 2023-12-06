function atribuir() {
  const text = document.querySelector("p");

  const verifyExistsClass = text.classList.contains("green");

  console.log(verifyExistsClass);
}

/*foi visto o metodo (.add) para adicionar um class
o metodo (.replace) para trocar a class.
o metodo (.toggle) para auternar de classe.
o metodo (contains) verifica se um elemento possui ou não uma class*/
