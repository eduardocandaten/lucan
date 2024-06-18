const secoes = document.querySelectorAll("[data-animar]");

function scrollAnimado() {
  const distanciaTopo = window.scrollY + window.innerHeight * 0.75;
  secoes.forEach((secao) => {
    if (distanciaTopo > secao.offsetTop) secao.classList.add("animar");
    else secao.classList.remove("animar");
  });
}

window.addEventListener("scroll", scrollAnimado);

scrollAnimado();
