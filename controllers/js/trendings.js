// VARIABLES
const w = window;
const d = document;

const trendsVar = {
  // CONTENEDOR
  container: d.querySelector(".trendings-container"),
  trends: d.querySelectorAll(".trends"),
  title: d.querySelectorAll(".trend-title"),
  recipe: d.querySelectorAll(".trend-recipe"),
  info: d.querySelectorAll(".trend-info"),
  description: d.querySelectorAll(".trend-description"),
  // COMENTARIOS DE LA RECETA
  commentsContainer: d.querySelectorAll(".trend-send-comment"),
  actions: d.querySelectorAll(".trend-actions"),
  sendComment: d.querySelectorAll(".trend-send-comment"),
  modals: d.querySelectorAll(".trend-modal"),
  previewModal: d.querySelectorAll(".preview-modal"),
  shareModal: d.querySelectorAll(".share-modal"),
  quitModal: d.querySelectorAll(".quit-modal"),
};

// FUNCIONES
class Trendings {
  constructor(vars, e) {
    this.trends = vars;
    this.event = e;
    if (e.target.id === "like") {
      e.target.children[0].classList.toggle("none");
      e.target.children[1].classList.toggle("none");
    }
  }

  showOrHide(elem, action) {
    if (action === "show") {
      elem.classList.add("show");
    } else {
      elem.classList.remoe("show");
    }
  }
}

// EVENTOS
// --------- QUESTIONS
w.addEventListener("load", (e) => {
  trendsVar.container.addEventListener(
    "click",
    (e) => new Trendings(trendsVar, e)
  );
});
