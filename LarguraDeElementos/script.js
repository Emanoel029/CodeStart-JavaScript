const second = document.querySelector(".second-banner"); //scroll

//clientWidth = width + padding
const larguraDiv = second.clientWidth;
console.log(larguraDiv);

//offsetWidth = width + padding + border
const consideraBorder = second.offsetWidth;
console.log(consideraBorder);

//scrollWidth = width + padding + border incluindo Scroll
const alturaDivScroll = second.scrollWidth;
console.log(alturaDivScroll);

//OBS: No css o segundo banner foi definido uma largura de 300px com o scrollWidth ele ignora essa largura e dar a largura real da div com o scroll

//offsetTop   offsetLeft  -> qual distâncias os elementos estão do topo da tela(offsetTop) qual distancia o elemento tem da margem esqueda da tela (offsetLeft)

console.log(second.offsetLeft);

console.log(window.innerHeight); // window.innerHeight p saber a altura da tela sem contar com scroll

//window.innerWidth  p saber a largura da tela.

console.log(window.outerHeight); //window.outerHeight leva em conta atela por completa do pc medindo a altura

console.log(window.outerWidth); //window.outerWidth leva em conta atela por completa do pc medindo a largura
