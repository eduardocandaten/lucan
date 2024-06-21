const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const secoes = document.querySelectorAll("[data-animar]");

function scrollAnimado() {
  const distanciaTopo = window.scrollY + window.innerHeight * 0.75;
  secoes.forEach((secao) => {
    if (distanciaTopo > secao.offsetTop) secao.classList.add("animar");
    else secao.classList.remove("animar");
  });
}

if (secoes.length) {
  window.addEventListener("scroll", debounce(scrollAnimado, 50));
}

scrollAnimado();
