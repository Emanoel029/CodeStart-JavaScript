function capturar() {
  const input = document.querySelector("input");
  const p = document.querySelector("p");

  p.textContent = "novo texto";

  const captura = input.value;
  console.log(captura);
}

/*
textContent seve para pegar o conteúdo de dentro da tag.
*Dessa forma p.textContent = "novo texto" está atribuindo um novo texto ao paragrafo quando aciona o evento onclik.
*capturando o valor digitado no input -> input.value*/
