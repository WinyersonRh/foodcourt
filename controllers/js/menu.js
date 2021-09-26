((d) => {
  const $btn = d.querySelector(".btn-menu"),
    $menu = d.querySelector(".menu");

  $btn.addEventListener("click", () => {
    $menu.classList.toggle("show");
    $btn.classList.toggle("on");
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu a")) {
      $menu.classList.remove("show");
      $btn.classList.remove("on");
    }
  });
})(document);
