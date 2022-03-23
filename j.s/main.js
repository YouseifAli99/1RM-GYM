

/* --------------------- section inmation call function --------------------- */
AOS.init();

/* ------------------------------ loding screen ----------------------------- */
$(document).ready(function(){
  $("#loding .spinner").fadeOut(500,function(){
    /* -------------------------------- imgLoding ------------------------------- */
    /* ------------------------------- pragLoading ------------------------------ */
    $("#pragLoading").fadeOut(500,function(){
      $("#imgLoding").fadeOut(500,function(){
        $("#loding").fadeOut(200,function(){
          $("body").css("overflow-y","auto")
        })
      })
    })
  })
})
/* ------------------------- dark theme toggle start ----------------------- */
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
  }

 /* ------------------------- dark theme toggle end ------------------------ */



/* --------------------------- button to top start -------------------------- */


document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* --------------------------- button to top end -------------------------- */

/* ------------------------ text animatin for section start ----------------------- */
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  var textWrapper = document.querySelector('.ml7 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml7 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml7',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/* ------------------------ text animatin for section end ----------------------- */
