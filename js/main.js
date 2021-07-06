const d = document,
  $btnMenu = d.getElementById("menu-btn"),
  $menu = d.getElementById("menu-items");

d.addEventListener("click", (e) => {
  /* show or hide menu */
  if (e.target == $btnMenu || e.target.matches("ul *")) {
    /* AGREGAR ANIMACIÓN PARA DESAPARECER MENU BIEN BONITO */

    $menu.classList.toggle("active");
  }

  /* Expand or contract items */
  if (e.target.matches(".dropdown *")) {
    e.target.parentNode.classList.toggle("active");

    let $ul = e.target.nextElementSibling;
    let $items = $ul.dataset.items;

    e.target.parentNode.classList.contains("active")
      ? ($ul.style.height = `${$items * 60}px`)
      : ($ul.style.height = "0px");
  }
});
