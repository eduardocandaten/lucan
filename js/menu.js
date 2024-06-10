const botaoMenu = document.getElementById("botao-menu");
const headerMenu = document.querySelector(".header ul");

function abrirMenu() {
  botaoMenu.classList.toggle("ativo");
  headerMenu.classList.toggle("ativo");
}

botaoMenu.addEventListener("click", abrirMenu);
