$(document).ready(function () {
  $("#languages").on("click", "p", function (event) {
    let selectedLanguage = event.target;
    if (selectedLanguage.tagName === "P") {
      $("#languages p").each(function () {
        if ($(this).is(selectedLanguage)) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }
  });

  $("#menu").on("click", "p", function (event) {
    let selectedMenu = event.target;
    if (selectedMenu.tagName === "P") {
      $("#menu p").each(function () {
        if ($(this).is(selectedMenu)) {
          $(this).addClass("active-menu");
        } else {
          $(this).removeClass("active-menu");
        }
      });
    }
  });
});

$(".burger").on("click", function () {
  $(this).toggleClass("burger-act");
  $("#nav").toggleClass("burger-act");
});
