const responsiveSwitchWidth = window.matchMedia('(max-width: 60rem)');
responsiveSwitchWidth.addEventListener('change', responsiveSwitch);

const navMenu = document.getElementById("navMenu");

let navShown = true;


function responsiveSwitch(event) {
    if (event.matches) {
        hideNav();
    } else {
        showNav();
        gsap.set(navMenu,{y:0});
    }
}

function showNav() {
    navMenu.classList.remove("hidden");
    navShown = true;
}

function hideNav() {
    navMenu.classList.add("hidden");
    navShown = false;
}

function toggleNav() {
    if (!navShown) {
        showNav();
        gsap.fromTo(navMenu,
        {
            y: -324,
        },
        {
            duration: 0.5, 
            y: 0, 
            ease: "power4.inOut"
        });
    } else {
        gsap.fromTo(navMenu,
        {
            y: 0,
        },
        {
            duration: 0.5, 
            y: -324, 
            ease: "power4.inOut",
            onComplete: hideNav
        });
    }
}

responsiveSwitch(responsiveSwitchWidth);