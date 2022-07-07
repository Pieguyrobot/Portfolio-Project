$(".project-hider").hover(function() {
  $(".project-hider").css("background", "rgba(0, 0, 0, 0)");
  $(".project-hider").css("backdropFilter", "blur(0px)");
  $(".project-hider").css("zIndex", "0");
  $(".project-text").css("marginLeft", "700px");
  $(".project-text").css("marginTop", "-220px");
});
                  
$(".project-section").mouseleave(function() {
  $(".project-hider").css("background", "rgba(0, 0, 0, 0.1)");
  $(".project-hider").css("backdropFilter", "blur(8px)");
  $(".project-hider").css("zIndex", "1");
  $(".project-text").css("marginLeft", "0px");
  $(".project-text").css("marginTop", "-30px");
});