//Header Scroll---------------------------------------------------------------------//
let nav = document.querySelector(".navbar");
//making function on window onscroll
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add(".header-scrolled")
    }
    else {
        nav.classList.remove(".header-scrolled")
    }
}

//on mobile view after clicking toggler button, it will open the nav bar list but again it is not able to close//
let navBar = documnet.querySelectorAll(".nav-link");
//storing all the nav link here//

let navCollapse = document.querySelector(".navbar-collapse.collapse");
//grouping navbar-collaps and collapse//
//function a is parameter which is passed here//
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})



