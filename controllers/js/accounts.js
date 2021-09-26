((d) => {
  // VARIABLES
  const $container = d.querySelector(".accounts-container"),
    $btnLogin = d.querySelector(".login"),
    $btnRegister = d.querySelector(".register"),
    $loginForm = d.querySelector(".login-form"),
    $registerForm = d.querySelector(".register-form");

  class Show {
    constructor(form) {
      this.form = form;
      this.login = $loginForm;
      this.register = $registerForm;
      this.container = $container;
      if (screen.width < 768) this.mobile();
      if (screen.width >= 768) this.default();
    }

    mobile() {
      if (this.form === "login") {
        this.container.classList.add("hide");
        this.login.style.display = "flex";
        setTimeout(() => {
          this.login.classList.toggle("show");
          this.register.classList.remove("show");
        }, 0);
      } else {
        this.container.classList.add("hide");
        this.register.style.display = "flex";
        setTimeout(() => {
          this.login.classList.remove("show");
          this.register.classList.toggle("show");
        }, 0);
      }

      if (
        !this.login.className.includes("show") &&
        !this.register.className.includes("show")
      )
        this.container.classList.remove("hide");
    }

    default() {}
  }

  // EVENTOS
  $btnLogin.onclick = () => new Show("login");
  $btnRegister.onclick = () => new Show("register");
})(document);
