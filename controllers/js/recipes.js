// VARIABLES
const d = document;
// CONTAINER DE RECETAS
const container = d.getElementById("recipes-container");
// CATALOGO DE RECETAS
const cataloge = d.getElementById("recipes-cataloge");
// PLANTILLA DE RECETAS
const template = d.importNode(
  d.getElementById("recipes-template").content,
  true
);
const clone = template.cloneNode(true);
const clone2 = template.cloneNode(true);

const recipeVar = {
  // RECETA
  container: template.getElementById("recipe"),
  tagNew: template.querySelector(".new-recipe"),
  title: template.querySelector(".recipe-title"),
  img: template.querySelector(".recipe-img"),
  info: template.querySelector(".recipe-info"),
  chefUsername: template.querySelector(".recipe-username"),
  date: template.querySelector(".recipe-date"),
  description: template.querySelector(".recipe-description"),
  more: template.querySelector(".more"),
  star: template.getElementById("star-recipe"),
  comment: template.getElementById("comment-recipe"),
  share: template.getElementById("share-recipe"),
  // COMENTARIOS
  commentsContainer: template.getElementById("comments"),
  comment: template.getElementById("comment"),
  userImg: template.getElementById("user-img"),
  username: template.getElementById("username"),
  commentDescription: template.getElementById("comment-description"),
  likeComment: template.getElementById("like-comment"),
  answerComment: template.getElementById("answer-comment"),
  reportComment: template.getElementById("report-comment"),
  answerForm: template.getElementById("report-comment"),
  writeComment: template.getElementById("write-comment"),
  sendComment: template.getElementById("send"),
  svgSend: template.getElementById("svg-send"),
};
const recipeVar2 = {
  // RECETA
  container: clone.getElementById("recipe"),
  title: clone.querySelector(".recipe-title"),
  img: clone.querySelector(".recipe-img"),
  info: clone.querySelector(".recipe-info"),
  chefUsername: clone.querySelector(".recipe-username"),
  date: clone.querySelector(".recipe-date"),
  description: clone.querySelector(".recipe-description"),
  more: clone.querySelector(".more"),
  star: clone.getElementById("star-recipe"),
  comment: clone.getElementById("comment-recipe"),
  share: clone.getElementById("share-recipe"),
  // COMENTARIOS
  commentsContainer: clone.getElementById("comments"),
  comment: clone.getElementById("comment"),
  userImg: clone.getElementById("user-img"),
  username: clone.getElementById("username"),
  commentDescription: clone.getElementById("comment-description"),
  likeComment: clone.getElementById("like-comment"),
  answerComment: clone.getElementById("answer-comment"),
  reportComment: clone.getElementById("report-comment"),
  answerForm: clone.getElementById("report-comment"),
  writeComment: clone.getElementById("write-comment"),
  sendComment: clone.getElementById("send"),
  svgSend: clone.getElementById("svg-send"),
};
const recipeVar3 = {
  // RECETA
  container: clone2.getElementById("recipe"),
  title: clone2.querySelector(".recipe-title"),
  img: clone2.querySelector(".recipe-img"),
  info: clone2.querySelector(".recipe-info"),
  chefUsername: clone2.querySelector(".recipe-username"),
  date: clone2.querySelector(".recipe-date"),
  description: clone2.querySelector(".recipe-description"),
  more: clone2.querySelector(".more"),
  star: clone2.getElementById("star-recipe"),
  comment: clone2.getElementById("comment-recipe"),
  share: clone2.getElementById("share-recipe"),
  // COMENTARIOS
  commentsContainer: clone2.getElementById("comments"),
  comment: clone2.getElementById("comment"),
  userImg: clone2.getElementById("user-img"),
  username: clone2.getElementById("username"),
  commentDescription: clone2.getElementById("comment-description"),
  likeComment: clone2.getElementById("like-comment"),
  answerComment: clone2.getElementById("answer-comment"),
  reportComment: clone2.getElementById("report-comment"),
  answerForm: clone2.getElementById("report-comment"),
  writeComment: clone2.getElementById("write-comment"),
  sendComment: clone2.getElementById("send"),
  svgSend: clone2.getElementById("svg-send"),
};

// FUNCIONES
class Cataloge {
  constructor(container, cataloge, recipe, event) {
    this.container = container;
    this.cataloge = cataloge;
    this.recipe = recipe;
    this.event = event;
  }

  static loaded() {}

  addRecipe(title, img, chef, date, description) {
    this.recipe.title.textContent = title;
    this.recipe.img.src = img;
    this.recipe.chefUsername.textContent = chef;
    this.recipe.date.textContent = date;
    this.recipe.description.textContent = description;

    if (
      this.recipe.description.textContent.length > 40 &&
      window.screen.width < 768
    ) {
      cutString(this.recipe.description, 40);
    } else if (
      this.recipe.description.textContent.length > 150 &&
      window.screen.width >= 768 &&
      window.screen.width < 1024
    ) {
      cutString(this.recipe.description, 150);
    } else if (
      this.recipe.description.textContent.length > 200 &&
      window.screen.width > 1024
    ) {
      cutString(this.recipe.description, 200);
    }

    function cutString(string, cutUp) {
      string.innerHTML = `${string.textContent.substring(
        0,
        cutUp
      )}...<button class="more">Más</button>
      `;
    }

    this.recipe.commentDescription.textContent =
      "Descripcion del comentario sobre la receta";

    return this.cataloge.appendChild(this.recipe.container);
  }

  more(container, string, button) {
    console.log(container);
    console.log(string);
    console.log(button);
  }
}

// EVENTOS
window.addEventListener("load", (e) => Cataloge.loaded());
window.addEventListener("DOMContentLoaded", (e) => {
  new Cataloge(container, cataloge, recipeVar, e).addRecipe(
    "Sopa instantánea con tocino de jamón Wiener",
    "../../models/images/platillo10.jpg",
    "Winyerson Rivera",
    "09-10-2021",
    "Lorem ipsum dolor sit amet inuman consectetur adipisicing elit. Nam esse corrupti dolores illo excepturi quis repudiandae, iusto illum iure itaque voluptates voluptate debitis, iste labore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, iusto doloremque? Veritatis expedita, similique dicta voluptatum, enim et eligendi, at quam sapiente necessitatibus fugiat illum provident voluptatem quod quaerat eveniet sunt. Quas nesciunt ipsum, inventore dolorem odio autem dicta dolores!"
  );
  new Cataloge(container, cataloge, recipeVar2, e).addRecipe(
    "Arepa de queso",
    "../../models/images/platillo11.jpg",
    "Winyerson Rivera",
    "09-10-2021",
    "Lorem ipsum dolor sit amet inuman consectetur adipisicing elit. Nam esse corrupti dolores."
  );
  new Cataloge(container, cataloge, recipeVar3, e).addRecipe(
    "Sándwiches de aguacate y huevo",
    "../../models/images/platillo9.jpg",
    "Winyerson Rivera",
    "09-10-2021",
    "Lorem ipsum dolor sit amet inuman consectetur adipisicing elit. Nam esse corrupti dolores illo excepturi quis repudiandae, iusto illum iure itaque voluptates voluptate debitis, iste labore."
  );
});

recipeVar.description.addEventListener("click", (e) => {
  if (recipeVar.description.scrollHeight > recipeVar.description.clientHeight) {
  }
  console.log(recipeVar.description.clientHeight);
});

recipeVar.writeComment.addEventListener("keydown", (e) => {
  const lines = recipeVar.writeComment.value.split(/\n/);

  console.log(lines.length);

  if (lines.length === 1 && recipeVar.writeComment.scrollTop === 0) {
    recipeVar.writeComment.rows = 1;
  } else if (e.key === "Backspace") {
    recipeVar.writeComment.rows--;
  }

  if (recipeVar.writeComment.scrollTop > 0) {
    recipeVar.writeComment.rows++;
  } else if (recipeVar.writeComment.value.match(/\n/g || [])) {
    recipeVar.writeComment.rows = lines.length;
  }
});
