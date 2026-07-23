const responsiveSwitchWidth = window.matchMedia('(max-width: 60rem)');
responsiveSwitchWidth.addEventListener('change', responsiveSwitch);

const navMenu = document.getElementById("navMenu");

let navShown = true;

function responsiveSwitch(event) {
    if (event.matches) {
        navMenu.classList.add("hidden");
        navShown = false;
    } else {
        navMenu.classList.remove("hidden");
        navShown = true;
    }
}

function toggleNav() {
    if (!navShown) {
        navMenu.classList.remove("hidden");
        navShown = true;
        gsap.fromTo(navMenu, {
        y: -324,
        },{
        duration: 0.5, 
        y: 0, 
        ease: "power4.inOut"
        });
    } else {
        navMenu.classList.add("hidden");
        navShown = false;
    }
}

responsiveSwitch(responsiveSwitchWidth);