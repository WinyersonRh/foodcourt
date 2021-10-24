((d, w) => {
  const $menuVar = {
    $menu: d.getElementById("menu"),
    $btn: d.getElementById("btn-menu"),
    $open: d.getElementById("menu-open"),
    $close: d.getElementById("menu-close"),
  };

  // FUNCIONES
  function openMenu() {
    if ($menuVar.$close.classList.contains("none")) {
      $menuVar.$btn.style.boxShadow = "0 0 4px 1px #ccc";
      $menuVar.$menu.classList.add("show");
      $menuVar.$open.classList.toggle("none");
      $menuVar.$close.classList.toggle("none");
    } else {
      quitMenu();
    }
  }

  function quitMenu() {
    if ($menuVar.$open.classList.contains("none")) {
      $menuVar.$btn.style.boxShadow = defaultStatus;
      $menuVar.$menu.classList.remove("show");
      $menuVar.$open.classList.toggle("none");
      $menuVar.$close.classList.toggle("none");
    }
  }

  $menuVar.$btn.addEventListener("click", (e) => openMenu());

  $menuVar.$btn.addEventListener("blur", (e) => quitMenu());
})(document, window);
