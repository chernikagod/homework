$(document).ready(function () {
  const languages = $("#languages");
  languages.on("click", "p", function (event) {
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

  const menu = $("#menu");
  menu.on("click", "p", function (event) {
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

  const nav = $("#nav");
  nav.on("click", "li", function (event) {
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

  const popupWrapper = $(".popup-wrapper");
  const btnWrapper = $(".btn-cons");

  btnWrapper.click(function () {
    popupWrapper.addClass("active-wrapper");
  });

  $(".popup-window .close, .popup-wrapper").click(function (event) {
    if ($(event.target).is(this)) {
      $(".popup-wrapper").removeClass("active-wrapper");
    }
  });
});
