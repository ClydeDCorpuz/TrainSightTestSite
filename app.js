gsap.defaults({
  ease: "power4.inOut",
  duration: 0.5,
});

const navMenu = document.getElementById("navMenu");
let navShown = true;

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
        gsap.fromTo(navMenu, {
            y: -324,
        }, {
            y: 0
        });
    } else {
        gsap.to(navMenu, {
            y: -324,
            onComplete: hideNav
        });
    }
}

const responsiveSwitchWidth = window.matchMedia('(max-width: 52rem)');
responsiveSwitchWidth.addEventListener('change', responsiveSwitch);
responsiveSwitch(responsiveSwitchWidth);

function responsiveSwitch(event) {
    if (event.matches) {
        hideNav();
    } else {
        showNav();
        gsap.set(navMenu,{y:0});
    }
}