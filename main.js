function myMenuFunction(){
    let menu = document.getElementById("myNavMenu");
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById(".nav-menu-btn i");
    if(menu.className === "nav-menu"){
        menu.className += "responsive";
    }else{
        menu.className = "nav-menu";
    }

  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}


window.onscroll = function(){headerShadow()};

function headerShadow(){
    const navHeader = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "110px";
        navHeader.style.lineHeight = "110px";
    }
}

let typingEffect = new Typed(".typedText",{
    strings : ["Designer", "Idea Strategist", "Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80, 
    backDelay : 2000
});

const sr = scrollReveal({
    origin : 'top',
    distance : '80px',
    duration : 2000, 
    reset : true
})