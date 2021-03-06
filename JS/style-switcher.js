/* Toggle Style Switcher */
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
/* Esconder Style selector en scroll */
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* Activar Style de color */
const alternateStyle = document.querySelectorAll(".alternate-style");
console.log(alternateStyle[0])
function setActiveStyle(color){
    localStorage.setItem("color", color); // color: color-1
    changeColor();
}
function changeColor(){
    alternateStyle.forEach((style) => {
        //console.log(style)
        if (localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
/* Tema light y dark*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

window.onload = function(){
    alternateStyle[0].removeAttribute("disabled");
}