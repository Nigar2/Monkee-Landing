function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//   $(window).on('load', function() { 
//   $('#status').fadeOut(); 
//   $('#preloader').delay(350).fadeOut('slow');
//   $('body').delay(350).css({'overflow':'visible'});
// })

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display="none"
  
})