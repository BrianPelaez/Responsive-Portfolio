/* Typing Animación */
var typed = new Typed(".typing", {
    strings:["","Web Designer","Full-Stack Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function(box) {
    $clamp(box, {clamp: 6});
  });