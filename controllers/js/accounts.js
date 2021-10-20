((d) => {
  // VARIABLES
  const $SHOW = {
    $container: d.getElementById("show-btn"),
    $login: d.getElementById("show-btn-login"),
    $register: d.getElementById("show-btn-register"),
  };
  const $FORMS = {
    // LOGIN
    $closeL: d.getElementById("login-form-close"),
    $formL: d.getElementById("login-form"),
    $userL: d.getElementById("login-user"),
    $passwordL: d.getElementById("login-password"),
    $btnL: d.getElementById("login-btn"),
    // REGISTER
    $closeR: d.getElementById("register-form-close"),
    $formR: d.getElementById("register-form"),
    $userR: d.getElementById("register-user"),
    $passwordR: d.getElementById("register-password"),
    $emailR: d.getElementById("register-email"),
    $ageR: d.getElementById("register-age"),
    $paisR: d.getElementById("register-country"),
    $btnR: d.getElementById("register-btn"),
  };

  // FUNCIONES
  class Accounts {
    constructor(showBtn, forms, e, restartDefault = false) {
      this.show = showBtn;
      this.forms = forms;
      this.event = e;

      if (restartDefault === false) {
        if (screen.width < 768) this.mobile();
        if (screen.width >= 768 && screen.width < 1024) this.tablet();
        if (screen.width >= 1024) this.pc();
      } else if (restartDefault === true) {
        this.allDefault();
      } else {
        console.error("Ha ocurrido un error, actualice la pagina...");
      }
    }

    mobile() {
      if (
        (this.event.target === this.show.$login &&
          this.show.$login.classList.contains("active")) ||
        (this.event.target === this.show.$register &&
          this.show.$register.classList.contains("active"))
      ) {
        this.show.$container.style = defaultStatus;
        this.show.$login.classList.remove("active");
        this.show.$register.classList.remove("active");

        this.forms.$formL.classList.remove("show");
        this.forms.$formR.classList.remove("show");

        return false;
      } else if (this.event.target === this.show.$login) {
        this.show.$container.style.top = "-3.5rem";
        this.show.$login.classList.add("active");
        this.show.$register.classList.remove("active");

        if (this.forms.$formR.classList.contains("show")) {
          this.forms.$formR.classList.remove("show");
          setTimeout(() => this.forms.$formL.classList.add("show"), 300);
        } else {
          this.forms.$formL.classList.add("show");
        }
      } else {
        this.show.$container.style.top = "-3.5rem";
        this.show.$login.classList.remove("active");
        this.show.$register.classList.add("active");

        if (this.forms.$formL.classList.contains("show")) {
          this.forms.$formL.classList.remove("show");
          setTimeout(() => this.forms.$formR.classList.add("show"), 300);
        } else {
          this.forms.$formR.classList.add("show");
        }
      }
    }

    tablet(close = false) {
      if (this.event.target.id.includes("login")) {
        // EQUIS PARA CERRAR FORMULARIO
        this.forms.$closeL.classList.add("show");

        this.forms.$formL.style.display = "block";

        setTimeout(() => this.forms.$formL.classList.add("show"), 100);
        setTimeout(() => {
          this.forms.$formL.style.top = "0";
          this.forms.$formL.style.zIndex = "999";
          this.show.$container.style.height = "0%";
        }, 300);
      } else if (this.event.target.id.includes("register")) {
        // EQUIS PARA CERRAR FORMULARIO
        this.forms.$closeR.classList.add("show");

        this.forms.$formR.style.display = "block";

        setTimeout(() => this.forms.$formR.classList.add("show"), 100);
        setTimeout(() => {
          this.forms.$formR.style.top = "0";
          this.forms.$formR.style.zIndex = "999";
          this.show.$container.style.height = "0%";
        }, 300);
      } else {
        console.error("Este evento no existe...");
      }
    }

    pc() {
      if (this.event.target.id.includes("login")) {
        this.forms.$formR.classList.remove("show");
        setTimeout(() => this.forms.$formL.classList.toggle("show"), 300);
      } else if (this.event.target.id.includes("register")) {
        this.forms.$formL.classList.remove("show");
        setTimeout(() => this.forms.$formR.classList.toggle("show"), 300);
      } else {
        console.error("El evento no existe...");
      }
    }

    allDefault() {
      Object.values(this.show).forEach((elem) => {
        elem.style = defaultStatus;
        if (elem.classList.contains("show")) elem.classList.remove("show");
        if (elem.classList.contains("active")) elem.classList.remove("active");
      });

      this.forms.$formL.classList.remove("show");
      this.forms.$formR.classList.remove("show");
      this.forms.$formL.classList.remove("active");
      this.forms.$formR.classList.remove("active");
      this.forms.$formL.style = defaultStatus;
      this.forms.$formR.style = defaultStatus;
    }
  }

  function closeForm(form, showBtn = $SHOW.$container) {
    form.style.top = "25%";
    showBtn.style = defaultStatus;
    showBtn.style.zIndex = "999";

    setTimeout(() => {
      form.style.top = "0";
      form.style.zIndex = defaultStatus;
    }, 300);
    setTimeout(() => form.classList.remove("show"), 400);
    setTimeout(() => (form.style = defaultStatus), 500);
  }

  // EVENTOS
  // MOSTRAR FORMULARIOS
  $SHOW.$login.addEventListener("click", (e) => new Accounts($SHOW, $FORMS, e));
  $SHOW.$register.addEventListener(
    "click",
    (e) => new Accounts($SHOW, $FORMS, e)
  );

  // OCULTAR FORMULARIOS
  $FORMS.$closeL.addEventListener("click", (e) => closeForm($FORMS.$formL));
  $FORMS.$closeR.addEventListener("click", (e) => closeForm($FORMS.$formR));

  window.addEventListener(
    "resize",
    (e) => new Accounts($SHOW, $FORMS, e, true)
  );
})(document);
