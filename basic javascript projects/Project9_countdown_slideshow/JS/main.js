var slideIndex = 1;    // defining a variable
showSlides(slideIndex);

// Next/prev controls
function plusSlides(n) {   // defining function
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {   // defining function
  showSlides(slideIndex = n);
}

function showSlides(n) {    // defining function
  var i;          // defining variable
  var slides = document.getElementsByClassName("mySlides");   // defining variable
  var dots = document.getElementsByClassName("dot");   // defining variable 
  if (n > slides.length) {slideIndex = 1}     // assigning action to the if statement
  if (n < 1) {slideIndex = slides.length}   // assigning action to the if statement
  for (i = 0; i < slides.length; i++) {     // assigning action to the if statement
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {      // assigning action to the for statement
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";   // display
  dots[slideIndex-1].className += " active";      // display
}










function countdown() {
    var seconds=document.getElementById("seconds").value;

    function tick() {
        seconds= seconds - 1;
        timer.innerHTML=seconds;
        setTimeout (tick, 1000);
        if (seconds == -1) {
            alert ("Time's up!");
        }
    }
    tick();
}


