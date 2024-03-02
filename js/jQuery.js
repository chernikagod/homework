$(".nav-link").click(function (e) {
  const targetSelector = $(this).data("target");
  $(".tab-pane").hide();
  $(targetSelector).show();
});
