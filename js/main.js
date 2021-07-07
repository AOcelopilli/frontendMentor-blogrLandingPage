const d = document,
  $btnMenu = d.getElementById("menu-btn"),
  $menu = d.getElementById("menu-items");

d.addEventListener("click", (e) => {
  /* Hamburguer button */
  if (e.target == $btnMenu || e.target.matches("ul *")) {
    $btnMenu.classList.toggle("active");
    $menu.classList.toggle("active");
  }

  /* Dropdown section menu */
  if (e.target.matches(".dropdown *")) {
    e.target.parentNode.classList.toggle("active");

    let $ul = e.target.nextElementSibling;
    let $items = $ul.dataset.items;

    e.target.parentNode.classList.contains("active")
      ? ($ul.style.height = `${$items * 60}px`)
      : ($ul.style.height = "0px");
  }
});
