const botaoMenu = document.getElementById("botao-menu");

function abrirMenu(event) {
  // previna a o touch de abrir o menu, apenas o click
  if ((event.type = "touchstart")) event.preventDefault();

  // classes para o funcionamento do botão
  const headerMenu = document.querySelector(".header ul");
  botaoMenu.classList.toggle("ativo");
  headerMenu.classList.toggle("ativo");
  const ativo = headerMenu.classList.contains("ativo");

  // modifica o valor do aria-expanded
  event.currentTarget.setAttribute("aria-expanded", ativo);

  // modifica o valor do aria-label
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

botaoMenu.addEventListener("click", abrirMenu);

// para que não tenha demora no uso mobile
botaoMenu.addEventListener("touchstart", abrirMenu);
