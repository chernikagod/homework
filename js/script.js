$(document).ready(function () {
  $("#languages").on("click", "p", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $("#menu").on("click", "p", function () {
    $(this).addClass("active-menu").siblings().removeClass("active-menu");
  });

  $(".burger").click(function () {
    $(this).toggleClass("burger-action");
    $("#nav").toggleClass("burger-action");
  });

  $("#nav").on("click", "li", function () {
    $(this).addClass("active-li").siblings().removeClass("active-li");
  });

  $("#circles").on("click", ".circle", function (event) {
    var selectedCircle = $(event.target);
    if (selectedCircle.is("div")) {
      $("#circles .circle").removeClass("circle-active");
      selectedCircle.addClass("circle-active");
    }
  });

  const $popupWrapper = $(".popup-wrapper");
  const $btnWrapper = $(".btn-cons");

  $btnWrapper.on("click", function () {
    $popupWrapper.addClass("active-wrapper");
  });

  $(".popup-window .close, .popup-wrapper").on("click", function (event) {
    if ($(event.target).is(this)) {
      $(".popup-wrapper").removeClass("active-wrapper");
    }
  });
});
