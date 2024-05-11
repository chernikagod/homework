$("#languages").on("click", "p", function () {
  $("#languages p").removeClass("active-lang");
  $(this).addClass("active-lang");
});

$("#menu").on("click", "p", function () {
  $("#menu p").removeClass("active-menu");
  $(this).addClass("active-menu");
});

$(".burger").on("click", function () {
  $(this).toggleClass("burger-act");
  $("#nav").toggleClass("burger-act");
});

$("#nav").on("click", "li", function () {
  $("#nav li").removeClass("active-li");
  $(this).addClass("active-li");
});

function changeImage(x, image) {
  if (x == 1) {
    $(image).attr("src", "./img/scroll-red.svg");
  }
  if (x == 2) {
    $(image).attr("src", "./img/Scroll.svg");
  }
}

$(".owl-carousel").owlCarousel({
  items: 1,
  margin: 30,
});

function showContent(tabNumber) {
  $(".tab").removeClass("active-tab");
  $(".content").hide();
  $(`.tab:nth-child(${tabNumber})`).addClass("active-tab");
  $(`.content:nth-child(${tabNumber})`).show();
}

function scrollToServices() {
  $("#services").get(0).scrollIntoView({ behavior: "smooth" });
}
