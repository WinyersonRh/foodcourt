((d, w) => {
  // VARIABLES
  let lastScroll = w.scrollY;
  const goUpBtn = d.getElementById("goUp");
  const header = d.querySelector(".header");
  const menu = d.getElementById("menu");

  // FUNCIONES
  class ScrollActions {
    constructor(var1) {
      this.var1 = var1;
    }

    static restartScroll(goUp, btn) {
      if (goUp === true) {
        w.scrollTo(0, 0);
        btn.classList.remove("show");
      } else if (goUp === false && w.scrollY > 100) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    }

    scrollToElem(ref) {
      const toward = d.getElementById(ref.dataset.to);
      w.scrollTo(0, toward.offsetTop - 150);
      toward.classList.add("highlight");
      setTimeout(() => toward.classList.remove("highlight"), 2000);
    }

    hideMenu(e) {
      if (w.screen.width <= 425) {
        if (w.scrollY > lastScroll) {
          menu.style.top = "4rem";
          menu.style.minHeight = "calc(100vh - 2rem)";
          header.style.height = "4rem";
        } else {
          menu.style = defaultStatus;
          header.style = defaultStatus;
        }

        lastScroll = w.scrollY;
      }
    }
  }
  // EVENTOS
  // --------- QUESTIONS
  w.addEventListener("load", (e) => {
    e.target.addEventListener("click", (e) => {
      if (e.target.matches(".questions button")) {
        new ScrollActions().scrollToElem(e.target);
      }
    });

    goUpBtn.addEventListener("click", (e) =>
      ScrollActions.restartScroll(true, goUpBtn)
    );

    w.addEventListener("scroll", (e) => {
      ScrollActions.restartScroll(false, goUpBtn);
      new ScrollActions().hideMenu(e);
    });
    w.addEventListener("resize", (e) => {
      menu.style = defaultStatus;
      header.style = defaultStatus;
    });
  });
})(document, window);
