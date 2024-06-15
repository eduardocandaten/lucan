const imagensSlide = document.querySelectorAll(".galerias-slides li");

function atualizarClasses(index) {
  imagensSlide.forEach((imagem, i) => {
    imagem.classList.remove("anterior", "ativo", "posterior");
    if (i === index - 1) imagem.classList.add("anterior");
    if (i === index) imagem.classList.add("ativo");
    if (i === index + 1) imagem.classList.add("posterior");
  });
}

imagensSlide.forEach((imagem, index) => {
  imagem.addEventListener("click", (event) => {
    if (!imagem.classList.contains("ativo")) event.preventDefault();
    if (
      imagem.classList.contains("anterior") ||
      imagem.classList.contains("posterior")
    ) {
      atualizarClasses(index);
    }
  });
});
