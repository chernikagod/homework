class Slider {
  defaultOptions = {
    autoplay: true,
    autoplayTimeout: 1500,
    nav: true,
    infinite: true,
    pauseIfMouseOver: false,
    dots: true,
  };

  slider;
  slideItems;
  prevNav;
  nextNav;
  nav;
  activeSlide;
  autoplayTimeout;
  autoplayIntervalid;
  pauseIfMouseOver;

  constructor(selector, params) {
    this.slider = document.querySelector(selector);
    this.nav = params.nav ?? this.defaultOptions.nav;
    this.infinite = params.infinite ?? this.defaultOptions.infinite;
    this.autoplay = params.autoplay ?? this.defaultOptions.autoplay;
    this.autoplayTimeout =
      params.autoplayTimeout ?? this.defaultOptions.autoplayTimeout;
    this.pauseIfMouseOver =
      params.pauseIfMouseOver ?? this.defaultOptions.pauseIfMouseOver;

    if (this.slider) {
      console.log(this.slider);
      this.init();
    } else {
      throw new Error(`Slider selector ${selector} is not valid`);
    }
  }

  prevSlide() {
    if (this.activeSlide > 0) {
      this.activeSlide--;
      this.renderSlides();
      this.activeSlide === 0 && !this.infinite
        ? this.prevNav.setAttribute("disabled", "true")
        : this.nextNav.removeAttribute("disabled");
    } else if (this.activeSlide === 0) {
      if (this.infinite) {
        this.activeSlide = this.slideItems.length - 1;
        this.renderSlides();
      }
    }
    clearInterval(this.autoplayIntervalid);
    this.autoplayIntervalid = setInterval(
      () => this.nextSlide(),
      this.autoplayTimeOut
    );
  }

  nextSlide() {
    if (this.activeSlide < this.slideItems.length - 1) {
      this.activeSlide++;
      this.renderSlides();
      this.activeSlide === this.slideItems.length - 1 && !this.infinite
        ? this.nextNav.setAttribute("disabled", "true")
        : this.prevNav.removeAttribute("disabled");
    } else if (this.activeSlide === this.slideItems.length - 1) {
      if (this.infinite) {
        this.activeSlide = 0;
        this.renderSlides();
      }
    }
    clearInterval(this.autoplayIntervalid);
    this.autoplayIntervalid = setInterval(
      () => this.nextSlide(),
      this.autoplayTimeout
    );
  }

  renderDots() {
    const dotsWrapper = document.createElement("div");
    dotsWrapper.classList.add("dots");

    for (let i = 0; i < this.slideItems.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.dataset.index = i;
      dot.addEventListener("click", () => {
        this.activeSlide = i;
        this.renderSlides();
        this.renderDots();
      });
      dotsWrapper.appendChild(dot);
    }

    const dots = dotsWrapper.querySelectorAll(".dot");
    dots[this.activeSlide].classList.add("active");

    if (this.slider.querySelector(".dots")) {
      this.slider.replaceChild(dotsWrapper, this.slider.querySelector(".dots"));
    } else {
      this.slider.appendChild(dotsWrapper);
    }
  }

  renderNav() {
    const navWrapper = document.createElement("div");
    navWrapper.classList.add("navigation");
    this.prevNav = document.createElement("button");
    this.nextNav = document.createElement("button");
    this.prevNav.innerText = "<";
    this.nextNav.innerText = ">";
    navWrapper.appendChild(this.prevNav);
    navWrapper.appendChild(this.nextNav);
    this.slider.appendChild(navWrapper);
  }

  renderSlides() {
    this.slideItems = this.slider.querySelectorAll(".slide-item");

    this.slideItems.forEach((slide, index) => {
      if (index === this.activeSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
    this.renderDots();
  }

  init() {
    console.dir(this.slider);
    this.activeSlide = 0;
    this.nav && this.renderNav();
    this.renderSlides();
    !this.infinite && this.prevNav.setAttribute("disabled", "true");
    if (this.autoplay) {
      this.autoplayIntervalid = setInterval(
        () => this.nextSlide(),
        this.autoplayTimeout
      );
    }

    if (this.pauseIfMouseOver) {
      this.slider.addEventListener("mouseenter", () => {
        clearInterval(this.autoplayIntervalid);
      });
      this.slider.addEventListener("mouseleave", () => {
        this.autoplayIntervalid = setInterval(
          () => this.nextSlide(),
          this.autoplayTimeout
        );
      });
    }
  }
}
