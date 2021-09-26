// VARIABLES
const $carousel = document.querySelector(".carousel");
const $btnRight = document.querySelector(".btn-right");
const $btnLeft = document.querySelector(".btn-left");
const $dots = document.querySelector(".dots");
const PROPERTYS = {
  center: "translateX(-50%)",
  right: "translateX(100%)",
  left: "translateX(-200%)",
  active: "active",
};

// CLASE
class Carousel {
  constructor(carousel, dots, propertys, btn) {
    this.carousel = carousel;
    this.slides = [...carousel.children];
    this.dots = [...dots.children];
    this.prop = propertys;
    this.btn = btn;
    if (this.btn.className === "btn-right") this.slideNext();
    if (this.btn.className === "btn-left") this.slidePrev();
    if (this.btn === 0) this.dotsChangeSlide(0);
    if (this.btn === 1) this.dotsChangeSlide(1);
    if (this.btn === 2) this.dotsChangeSlide(2);
  }

  // DOT DE DIAPOSITIVA ACTUAL
  dotCurrent(slide) {
    if (this.slides[slide].className === "slide1") {
      this.dots[0].id = this.prop.active;
      this.dots[1].id = "";
      this.dots[2].id = "";
    }
    if (this.slides[slide].className === "slide2") {
      this.dots[0].id = "";
      this.dots[1].id = this.prop.active;
      this.dots[2].id = "";
    }
    if (this.slides[slide].className === "slide3") {
      this.dots[0].id = "";
      this.dots[1].id = "";
      this.dots[2].id = this.prop.active;
    }
  }

  // DIAPOSITIVA SIGUIENTE
  slideNext() {
    this.dotCurrent(1);

    this.btn.style.pointerEvents = "none";

    this.slides[0].style.transform = this.prop.left;
    this.slides[1].style.transform = this.prop.center;

    setTimeout(() => {
      this.carousel.appendChild(this.slides[0]);
      this.slides[0].style = defaultStatus;
      this.slides[1].style = defaultStatus;
    }, 800);

    this.btnDefault();
  }

  // DIAPOSITIVA ANTERIOR
  slidePrev() {
    this.dotCurrent(2);
    this.btn.style.pointerEvents = "none";

    this.slides[2].style.transform = this.prop.left;

    this.carousel.insertBefore(
      this.carousel.lastElementChild,
      this.carousel.firstElementChild
    );

    setTimeout(() => {
      this.slides[0].style.transform = this.prop.right;
      this.slides[2].style.transform = this.prop.center;
    }, 100);

    this.btnDefault();
  }

  // DOT CAMBIAR DIAPOSITIVA
  dotsChangeSlide(dot) {
    if (dot === 0) {
      if (this.dots[1].id === "active") {
        this.dotCurrent(2);

        this.slides[2].style.transform = this.prop.left;

        this.carousel.insertBefore(
          this.carousel.lastElementChild,
          this.carousel.firstElementChild
        );

        setTimeout(() => {
          this.slides[0].style.transform = this.prop.right;
          this.slides[2].style.transform = this.prop.center;
          this.slides[0].style = defaultStatus;
          this.slides[1].style = defaultStatus;
          this.slides[2].style = defaultStatus;
        }, 100);
      }
      if (this.dots[2].id === "active") {
        this.dotCurrent(1);

        this.slides[2].style.transform = this.prop.left;
        this.slides[1].style.transform = this.prop.left;

        this.carousel.insertBefore(
          this.carousel.lastElementChild,
          this.carousel.firstElementChild
        );
        this.carousel.insertBefore(
          this.carousel.lastElementChild,
          this.carousel.firstElementChild
        );

        setTimeout(() => {
          this.slides[1].style.transform = this.prop.center;
          this.slides[2].style.transform = this.prop.right;
          this.slides[0].style = defaultStatus;
          this.slides[1].style = defaultStatus;
          this.slides[2].style = defaultStatus;
        }, 100);
      }
    }
    if (dot === 1) {
      if (this.dots[0].id === "active") {
        this.dotCurrent(1);

        this.slides[0].style.transform = this.prop.left;
        this.slides[1].style.transform = this.prop.center;

        setTimeout(() => {
          this.carousel.appendChild(this.slides[0]);
          this.slides[0].style = defaultStatus;
          this.slides[1].style = defaultStatus;
          this.slides[2].style = defaultStatus;
        }, 800);
      }
      if (this.dots[2].id === "active") {
        this.dotCurrent(2);

        this.slides[2].style.transform = this.prop.left;

        this.carousel.insertBefore(
          this.carousel.lastElementChild,
          this.carousel.firstElementChild
        );

        setTimeout(() => {
          this.slides[0].style.transform = this.prop.right;
          this.slides[2].style.transform = this.prop.center;
          this.slides[0].style = defaultStatus;
          this.slides[1].style = defaultStatus;
          this.slides[2].style = defaultStatus;
        }, 100);
      }
    }
    if (dot === 2) {
      if (this.dots[0].id === "active") {
        this.dotCurrent(2);

        this.slides[0].style.transform = this.prop.left;
        this.slides[1].style.transform = this.prop.left;
        this.slides[2].style.transform = this.prop.center;

        setTimeout(() => {
          this.carousel.appendChild(this.slides[0]);
          this.carousel.appendChild(this.slides[1]);
          this.slides[0].style = defaultStatus;
          this.slides[1].style = defaultStatus;
          this.slides[2].style = defaultStatus;
        }, 800);
      }
      if (this.dots[1].id === "active") {
        this.dotCurrent(1);

        this.slides[0].style.transform = this.prop.left;
        this.slides[1].style.transform = this.prop.center;

        setTimeout(() => {
          this.carousel.appendChild(this.slides[0]);
          this.slides[0].style = defaultStatus;
          this.slides[1].style = defaultStatus;
          this.slides[2].style = defaultStatus;
        }, 800);
      }
    }
  }

  // REACTIVAR LAS FLECHAS RIGHT Y LEFT
  btnDefault = () => setTimeout(() => (this.btn.style = defaultStatus), 1000);
}

// EVENTOS
$btnRight.onclick = () => new Carousel($carousel, $dots, PROPERTYS, $btnRight);

$btnLeft.onclick = () => new Carousel($carousel, $dots, PROPERTYS, $btnLeft);

$dots.children[0].onclick = () => new Carousel($carousel, $dots, PROPERTYS, 0);
$dots.children[1].onclick = () => new Carousel($carousel, $dots, PROPERTYS, 1);
$dots.children[2].onclick = () => new Carousel($carousel, $dots, PROPERTYS, 2);
