const scrollers = document.querySelectorAll(('.scroller'));

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation()
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}

const magneto = document.querySelector('.magneto')
const magnetoText = document.querySelector('.magneto .text')
const dbgr = document.querySelector("#debugger")

const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect()
    const magnetoStrength = 40
    const magnetoTextStrength = 80
    const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.5
    const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.5

    // Move button to new position
    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    })

    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut
    })
}

const resetMagneto = (event) => {
    // Move button to initial position
    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y:0, 
        ease: Elastic.easeOut
    })

    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y:0, 
        ease: Elastic.easeOut
    })
}

magneto.addEventListener('mousemove', activateMagneto)
magneto.addEventListener('mouseleave', resetMagneto)

const words = ['Full-Stack Developer', 'Software Engineer', 'Web Developer']

let mainTimeline = gsap.timeline({
    repeat: -1
})

words.forEach(word => {
    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 8
    })
    
    textTimeline.to('#typewriter', {
        text: word,
        duration: 1.5,
        onUpdate: () => {
            cursorTimeline.restart()
            cursorTimeline.pause()
        },
        onComplete: () => {
            cursorTimeline.play()
        }
    })

    mainTimeline.add(textTimeline)
});

//Blinking Cursor
let cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: .8
})

cursorTimeline.to('#typewriter-cursor', {
    opacity: 1,
    duration: 0
}).to('#typewriter-cursor', {
    opacity: 0,
    duration: 0,
    delay: .8
})