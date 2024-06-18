const headerLinks = document.querySelectorAll(".header ul a");
const footerLinks = document.querySelectorAll(".footer-links a");

headerLinks.forEach((link) => {
  if (link.href === location.href) link.classList.add("ativo");
  else link.classList.remove("ativo");
});

footerLinks.forEach((link) => {
  if (link.href === location.href) link.classList.add("ativo");
  else link.classList.remove("ativo");
});
