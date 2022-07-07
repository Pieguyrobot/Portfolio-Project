$(".about-hider").hover(function() {
  $(".about-hider").css("background", "rgba(0, 0, 0, 0)");
  $(".about-hider").css("backdropFilter", "blur(0px)");
  $(".about-hider").css("zIndex", "0");
  $(".about-text").css("marginLeft", "725px");
  $(".about-text").css("marginTop", "-240px");
});
                  
$(".about-section").mouseleave(function() {
  $(".about-hider").css("background", "rgba(0, 0, 0, 0.1)");
  $(".about-hider").css("backdropFilter", "blur(8px)");
  $(".about-hider").css("paddingTop", "275px");
  $(".about-hider").css("paddingBottom", "193px");
  $(".about-hider").css("zIndex", "1");
  $(".about-text").css("marginLeft", "0px");
  $(".about-text").css("marginTop", "-30px");
});