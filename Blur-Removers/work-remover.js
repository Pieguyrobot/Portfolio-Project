$(".work-hider").hover(function() {
  $(".work-hider").css("background", "rgba(0, 0, 0, 0)");
  $(".work-hider").css("backdropFilter", "blur(0px)");
  $(".work-hider").css("zIndex", "0");
  $(".work-text").css("marginLeft", "240px");
  $(".work-text").css("marginTop", "-240px");
});
                  
$(".work-section").mouseleave(function() {
  $(".work-hider").css("background", "rgba(0, 0, 0, 0.1)");
  $(".work-hider").css("backdropFilter", "blur(8px)");
  $(".work-hider").css("zIndex", "1");
  $(".work-text").css("marginLeft", "0px");
  $(".work-text").css("marginTop", "-30px");
});