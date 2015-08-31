$("#nav-up").click(function() {
  $(".pho-scroll").removeClass("pho-scroll-down");
  $(".pho-scroll").addClass("pho-scroll-up");
  $("#nav-up").addClass("hidden-div");
  $("#nav-left").addClass("hidden-div");
  $("#nav-right").addClass("hidden-div");
});
$("#nav-down").click(function() {
  $(".pho-scroll").removeClass("pho-scroll-up");
  $(".pho-scroll").addClass("pho-scroll-down");
});