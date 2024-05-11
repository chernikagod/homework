$(document).ready(function () {
  $("#languages").on("click", "p", function (event) {
    let selectedLanguage = event.target;
    if (selectedLanguage.tagName === "P") {
      $("#languages p").each(function () {
        if ($(this).is(selectedLanguage)) {
          $(this).addClass("active-lang");
        } else {
          $(this).removeClass("active-lang");
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

  $(".burger").click(function () {
    $(this).toggleClass("burger-act");
    $("#nav").toggleClass("burger-act");
  });

  $("#nav").on("click", "li", function (event) {
    let selectedNavItem = event.target;
    if (selectedNavItem.tagName === "LI") {
      $("#nav li").each(function () {
        if ($(this).is(selectedNavItem)) {
          $(this).addClass("active-li");
        } else {
          $(this).removeClass("active-li");
        }
      });
    }
  });
});
