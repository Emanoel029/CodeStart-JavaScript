// addEventListener (event, function, options)

// function trocar() {
//   const p = document.querySelector("p");
//   p.style.color = "red";
// }

const button = document.querySelector(".bb");

function trocar() {
  const p = document.querySelector("p");
  p.style.color = "green";
  p.style.fontSize = "50px";
}

button.addEventListener("click", trocar); //Chamando a evento e a função

// button.addEventListener("click", () => {
//   const p = document.querySelector("p");
//   p.style.color = "red";
// });
