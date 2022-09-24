window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 70 ||     
    document.documentElement.scrollTop > 70) {
          
    document.getElementById("text").style.fontSize      = "40px";
    document.getElementById("text").style.paddingTop   = "30px";
      document.getElementById("text").style.marginTop = "0px";

      document.getElementById("header").style.backgroundSize = "2200px 100px";

      document.getElementById("header").style.height = "100px";
    
      } else {
      document.getElementById("header").style.height = "100vh";
     document.getElementById("text").style.fontSize 
     = "7vw";
      
    document.getElementById("text").style.paddingTop    = "30vh";

      document.getElementById("header").style.backgroundSize = "2200px 100vh";

      document.getElementById("text").style.marginTop = "45px";
    }
  }