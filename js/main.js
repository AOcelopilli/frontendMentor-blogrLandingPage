const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".dropdown *")) {
    e.target.parentNode.classList.toggle("active");

    let $ul = e.target.nextElementSibling;
    let $items = $ul.dataset.items;

    e.target.parentNode.classList.contains("active")
      ? ($ul.style.height = `${$items * 60}px`)
      : ($ul.style.height = "0px");
  }
});
