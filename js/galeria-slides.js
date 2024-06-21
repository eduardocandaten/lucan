const galerias = document.querySelector(".galerias-slides");
const imagens = document.querySelectorAll(".galerias-slides img");
const botaoVoltar = document.getElementById("botao-voltar");
const botaoAvancar = document.getElementById("botao-avancar");
const galeriaTitulos = document.querySelectorAll(".galerias-home h3");
const galeriaLinks = document.querySelectorAll(".galerias-home a");
let imagemAtual = 0;

function mostrarImagem(indexImagem) {
  galerias.style.transform = `translateX(${-(indexImagem * 100)}%)`;

  galeriaLinks.forEach((link) => {
    link.classList.remove("ativo");
  });

  galeriaLinks.forEach((link, indexLink) => {
    if (indexImagem === indexLink) link.classList.add("ativo");
  });
}

botaoVoltar.addEventListener("click", () => {
  imagemAtual = imagemAtual > 0 ? imagemAtual - 1 : imagens.length - 1;
  mostrarImagem(imagemAtual);
});

botaoAvancar.addEventListener("click", () => {
  imagemAtual = imagemAtual < imagens.length - 1 ? imagemAtual + 1 : 0;
  mostrarImagem(imagemAtual);
});

mostrarImagem(imagemAtual);
