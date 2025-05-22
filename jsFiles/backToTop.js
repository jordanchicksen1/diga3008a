document.addEventListener("DOMContentLoaded", function(){

const toTop = document.getElementById("to-top");

window.addEventListener("scroll", () =>{
    console.log("scrolling", window.pageYOffset);
    if(window.pageYOffset > 100){
       toTop.style.display = "block"
       console.log("Show");
    } else{
        toTop.style.display = "none";
    }
})
});