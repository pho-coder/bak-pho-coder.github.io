var $pho_scroll_position = "pho-panel-center";

$.fn.scroll=function (position, direction) {
  console.log(direction);
  console.log(position);
  if (position == "pho-panel-center" && direction == "up") {
    $(".pho-scroll").addClass("pho-scroll-up");
    $("#nav-up").addClass("hidden-div");
    $("#nav-left").addClass("hidden-div");
    $("#nav-right").addClass("hidden-div");
    $pho_scroll_position = "pho-panel-up";
  } else if (position == "pho-panel-up" && direction == "down") {
    $(".pho-scroll").removeClass("pho-scroll-up");
    $("#nav-up").removeClass("hidden-div");
    $("#nav-left").removeClass("hidden-div");
    $("#nav-right").removeClass("hidden-div");
    $pho_scroll_position = "pho-panel-center";
  } else if (position == "pho-panel-center" && direction == "down") {
    $(".pho-scroll").addClass("pho-scroll-down");
    $("#nav-down").addClass("hidden-div");
    $("#nav-left").addClass("hidden-div");
    $("#nav-right").addClass("hidden-div");
    $pho_scroll_position = "pho-panel-down";
  } else if (position == "pho-panel-down" && direction == "up") {
    $(".pho-scroll").removeClass("pho-scroll-down");
    $("#nav-down").removeClass("hidden-div");
    $("#nav-left").removeClass("hidden-div");
    $("#nav-right").removeClass("hidden-div");
    $pho_scroll_position = "pho-panel-center";
  } else if (position == "pho-panel-center" && direction == "left") {
    $(".pho-scroll").addClass("pho-scroll-left");
    $("#nav-up").addClass("hidden-div");
    $("#nav-left").addClass("hidden-div");
    $("#nav-down").addClass("hidden-div");
    $pho_scroll_position = "pho-panel-left";
  } else if (position == "pho-panel-left" && direction == "right") {
    $(".pho-scroll").removeClass("pho-scroll-left");
    $("#nav-up").removeClass("hidden-div");
    $("#nav-left").removeClass("hidden-div");
    $("#nav-down").removeClass("hidden-div");
    $pho_scroll_position = "pho-panel-center";
  } else if (position == "pho-panel-center" && direction == "right") {
    $(".pho-scroll").addClass("pho-scroll-right");
    $("#nav-up").addClass("hidden-div");
    $("#nav-right").addClass("hidden-div");
    $("#nav-down").addClass("hidden-div");
    $pho_scroll_position = "pho-panel-right";
  } else if (position == "pho-panel-right" && direction == "left") {
    $(".pho-scroll").removeClass("pho-scroll-right");
    $("#nav-up").removeClass("hidden-div");
    $("#nav-right").removeClass("hidden-div");
    $("#nav-down").removeClass("hidden-div");
    $pho_scroll_position = "pho-panel-center";
  }

  console.log($pho_scroll_position);
};

$("#nav-up").click(function() {
  $(".pho-scroll").scroll($pho_scroll_position, "up");
});
$("#nav-down").click(function() {
  $(".pho-scroll").scroll($pho_scroll_position, "down");
});
$("#nav-left").click(function() {
  $(".pho-scroll").scroll($pho_scroll_position, "left");
});
$("#nav-right").click(function() {
  $(".pho-scroll").scroll($pho_scroll_position, "right");
});