var toggle = 1;

$(".nav-button").click(function () {
  if (toggle == 1) {
    $(".nav-bar").css("marginLeft", "0px");
    $(".nav-bar a").css("marginLeft", "5px")
    toggle = 0;
  } 
  else if (toggle == 0) {
    $(".nav-bar").css("marginLeft", "-275px");
    $(".nav-bar a").css("marginLeft", "-275px");
    toggle = 1;
  }
});