const banner = document.querySelector(".banner");
const second = document.querySelector(".second-banner"); //scroll

//clientHeight = height + padding
const alturaDiv = banner.clientHeight;
console.log(alturaDiv);

//offsetHeight = height + padding + border
const consideraBorder = banner.offsetHeight;
console.log(consideraBorder);

//scrollHeight = height + padding + border incluindo Scroll
const alturaDivScroll = second.scrollHeight;
console.log(alturaDivScroll);

//OBS: No css o segundo banner foi definido uma altura de 300px com o scrollHeight ele ignora essa altura e dar o tamanho real da div com o scroll
