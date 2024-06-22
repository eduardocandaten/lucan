const imagensInternas = document.querySelectorAll(".galerias-interna li");

function aumentarImagem(imagemLi) {
  imagemLi.addEventListener("click", (imagem) => {
    imagemLi.classList.toggle("ativo");
    if (imagemLi.classList.contains("ativo"))
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  });
}

imagensInternas.forEach(aumentarImagem);
