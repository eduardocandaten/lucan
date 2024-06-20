const galerias = document.querySelector(".galerias-slides");
const imagens = document.querySelectorAll(".galerias-slides img");
const botaoVoltar = document.getElementById("botao-voltar");
const botaoAvancar = document.getElementById("botao-avancar");
let imagemAtual = 0;

function mostrarImagem(index) {
  galerias.style.transform = `translateX(${-(index * 100)}%)`;
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
