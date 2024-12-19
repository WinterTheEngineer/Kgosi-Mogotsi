import Lenis from 'lenis';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    // Lenis Smooth Scrolling

    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

});


document.addEventListener("DOMContentLoaded", function() {
    // cursor styles
    let innerCursor = document.getElementById('inner-cursor')
    let outerCursor = document.getElementById('outer-cursor')

    document.addEventListener('mousemove', moveCursor);

    function moveCursor(e){
        let x = e.clientX;
        let y = e.clientY;

        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;
        
        outerCursor.style.left = `${x}px`;
        outerCursor.style.top = `${y}px`;
    }

    let links = Array.from(document.querySelectorAll("a"));

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            innerCursor.classList.toggle("active");
        });

        link.addEventListener('mouseleave', () => {
            innerCursor.classList.remove("active");
        });
    });
});


// animate body background
function runBackground() {
    const spanWidth = document.querySelector("#body-bg").offsetWidth;

    gsap.to("#body-bg", {
        x: -spanWidth, // Adjust this value to determine how far the span moves
        ease: "none",
        scrollTrigger: {
            trigger: "body", // The trigger element for the scroll (you can choose a specific element here)
            start: "top top", // When the top of the viewport reaches the top of the body
            end: "bottom bottom", // When the bottom of the viewport reaches the bottom of the body
            scrub: true, // Makes the animation smooth and syncs with the scroll
        }
    });
};

runBackground();

window.addEventListener('resize', function() {
    updateBackgroundPosition();
});

function setTheme(theme) {
    const themeElements = document.querySelectorAll(".themed");

    themeElements.forEach(element => {
        
        //remove the current applied theme
        [...element.classList].forEach(cls => {
            if (cls.endsWith("-mode")) {
                element.classList.remove(cls);
                console.log(`removed class ${cls}`)
            }
        });

        if (theme !== "light-mode") {
            element.classList.add(theme);
            console.log(`add class ${theme}`)
        }
    });
}
window.setTheme = setTheme;