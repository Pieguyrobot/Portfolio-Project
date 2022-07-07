$(".goal-hider").hover(function() {
  $(".goal-hider").css("background", "rgba(0, 0, 0, 0)");
  $(".goal-hider").css("backdropFilter", "blur(0px)");
  $(".goal-hider").css("zIndex", "0");
  $(".goal-text").css("marginLeft", "875px");
  $(".goal-text").css("marginTop", "-240px");
});
                  
$(".goal-section").mouseleave(function() {
  $(".goal-hider").css("background", "rgba(0, 0, 0, 0.1)");
  $(".goal-hider").css("backdropFilter", "blur(8px)");
  $(".goal-hider").css("zIndex", "1");
  $(".goal-text").css("marginLeft", "0px");
  $(".goal-text").css("marginTop", "-30px");
});