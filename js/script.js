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
});
