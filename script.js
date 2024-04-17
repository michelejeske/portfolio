
    document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById("backToTopButton");
    backButton.addEventListener("click", function() {
      scrollToTop(1000); 
    });
    });
  
    function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(function(){
    if ( window.scrollY != 0 ) {
    window.scrollBy( 0, scrollStep );
    }
    else clearInterval(scrollInterval); 
    },15);
}

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle("dark-mode")
});

  
