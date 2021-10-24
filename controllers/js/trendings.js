// VARIABLES
const w = window;
const d = document;

// FUNCIONES
class Trendings {
  constructor(e) {
    this.event = e;
  }

  like() {
    const btn = this.event.target;

    if (btn.dataset.action === "like") {
      btn.children[0].classList.toggle("none");
      btn.children[1].classList.toggle("none");
    }
  }

  preview() {
    const btn = this.event.target;

    if (btn.dataset.action === "preview-quit") {
      const trendModal = btn.parentNode.parentNode;
      const previewModal = btn.parentNode;

      d.documentElement.style.overflow = defaultStatus;

      trendModal.classList.remove("show");
      previewModal.classList.remove("show");
    } else {
      const trendContainer = btn.parentNode.parentNode;
      const trendImg = trendContainer.querySelector(".trend-recipe img");
      const trendModal = trendContainer.querySelector(".trend-modal");
      const previewModal = trendContainer.querySelector(".preview-modal");
      const previewImg = previewModal.querySelector("#img-preview");

      previewImg.src = trendImg.src;

      d.documentElement.style.overflow = "hidden";

      trendModal.classList.add("show");
      previewModal.classList.add("show");
    }
  }

  comment() {
    const btn = this.event.target;

    if (btn.dataset.action === "quit-comment") {
      const comments = btn.parentNode.parentNode;

      if (w.screen < 1024) {
        d.documentElement.style.overflow = defaultStatus;
      }

      comments.classList.remove("show");
    } else {
      const comments = btn.parentNode.parentNode.querySelector(
        ".trend-comments-container"
      );

      if (w.screen < 1024) {
        d.documentElement.style.overflow = "hidden";
      }

      comments.classList.toggle("show");
    }
  }

  share() {
    const btn = this.event.target;

    if (btn.dataset.action === "share-quit") {
      const trendModal = btn.parentNode.parentNode.parentNode;
      const shareModal = trendModal.children[1];

      d.documentElement.style.overflow = defaultStatus;

      trendModal.classList.remove("show");
      shareModal.classList.remove("show");
    } else {
      const trendContainer = btn.parentNode.parentNode;
      const trendImg = trendContainer.querySelector(".trend-recipe img");
      const trendModal = trendContainer.querySelector(".trend-modal");
      const shareModal = trendModal.children[1];
      const shareImg = shareModal.querySelector("#share-img");

      shareImg.src = trendImg.src;

      d.documentElement.style.overflow = "hidden";

      trendModal.classList.add("show");
      shareModal.classList.add("show");
    }
  }

  quit() {
    const btn = this.event.target;

    if (btn.dataset.action === "quit-quit") {
      const trendModal = btn.parentNode.parentNode.parentNode;
      const quitModal = trendModal.querySelector(".quit-modal");

      d.documentElement.style.overflow = defaultStatus;

      trendModal.classList.remove("show");
      quitModal.classList.remove("show");
    } else {
      const trendContainer = btn.parentNode.parentNode;
      const trendModal = trendContainer.querySelector(".trend-modal");
      const quitModal = trendModal.querySelector(".quit-modal");

      d.documentElement.style.overflow = "hidden";

      trendModal.classList.add("show");
      quitModal.classList.add("show");
    }
  }

  quitAny() {
    const trendModal = this.event.target;

    [...trendModal.children].forEach((elem) => {
      if (elem.classList.contains("show")) {
        d.documentElement.style.overflow = defaultStatus;
        trendModal.classList.remove("show");
        elem.classList.remove("show");
      }
    });
  }
}

// EVENTOS
// --------- QUESTIONS
w.addEventListener("load", (e) => {
  w.addEventListener("click", (e) => {
    // ME GUSTA
    if (e.target.dataset.action === "like") {
      new Trendings(e).like();
    }
    // VISTA PREVIA
    if (e.target.dataset.action === "preview") {
      new Trendings(e).preview();
    }
    if (e.target.dataset.action === "preview-quit") {
      new Trendings(e).preview();
    }
    // COMENTARIOS
    if (e.target.dataset.action === "comment") {
      new Trendings(e).comment();
    }
    if (e.target.dataset.action === "quit-comment") {
      new Trendings(e).comment();
    }
    // COMPARTIR
    if (e.target.dataset.action === "share") {
      new Trendings(e).share();
    }
    if (e.target.dataset.action === "share-quit") {
      new Trendings(e).share();
    }
    // QUITAR / REPORTAR
    if (e.target.dataset.action === "quit") {
      new Trendings(e).quit();
    }
    if (e.target.dataset.action === "quit-quit") {
      new Trendings(e).quit();
    }
    // QUITAR CUALQUIER MODAL MEDIANTE EL PADRE DE LOS MODALES
    if (e.target.dataset.action === "quit-any") {
      new Trendings(e).quitAny();
    }
  });
});
