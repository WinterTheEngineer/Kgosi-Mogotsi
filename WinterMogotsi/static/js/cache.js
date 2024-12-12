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
                },
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


// Magneto
const magneto = document.querySelector('.magneto')
const magnetoText = document.querySelector('.magneto .text')

const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect()
    const magnetoStrength = 40
    const magnetoTextStrength = 45
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

// menu magnetism

const menu = document.querySelector('#menu-toggle')
const menuText = document.querySelector('#menu-toggle .icon')

const activateMenu = (event) => {
    let boundBox = menu.getBoundingClientRect()
    const menuStrength = 40
    const menuTextStrength = 30
    const newX = ((event.clientX - boundBox.left)/menu.offsetWidth) - 0.5
    const newY = ((event.clientY - boundBox.top)/menu.offsetHeight) - 0.5

    // Move button to new position
    gsap.to(menu, {
        duration: 1,
        x: newX * menuStrength,
        y: newY * menuStrength,
        ease: Power4.easeOut
    })

    gsap.to(menuText, {
        duration: 1,
        x: newX * menuTextStrength,
        y: newY * menuTextStrength,
        ease: Power4.easeOut
    })
}

const resetMenu = (event) => {
    // Move button to initial position
    gsap.to(menu, {
        duration: 1,
        x: 0,
        y:0, 
        ease: Elastic.easeOut
    })

    gsap.to(menuText, {
        duration: 1,
        x: 0,
        y:0, 
        ease: Elastic.easeOut
    })
}

menu.addEventListener('mousemove', activateMenu)
menu.addEventListener('mouseleave', resetMenu)

// offcanvas-nav-close

const OffcanvasClose = document.querySelector('.offcanvas-nav-close')
const OffcanvasCloseText = document.querySelector('.offcanvas-nav-close .icon')

const activateOffcanvasClose = (event) => {
    let boundBox = OffcanvasClose.getBoundingClientRect()
    const OffcanvasCloseStrength = 40
    const OffcanvasCloseTextStrength = 30
    const newX = ((event.clientX - boundBox.left)/OffcanvasClose.offsetWidth) - 0.5
    const newY = ((event.clientY - boundBox.top)/OffcanvasClose.offsetHeight) - 0.5

    // Move button to new position
    gsap.to(OffcanvasClose, {
        duration: 1,
        x: newX * OffcanvasCloseStrength,
        y: newY * OffcanvasCloseStrength,
        ease: Power4.easeOut
    })

    gsap.to(OffcanvasCloseText, {
        duration: 1,
        x: newX * OffcanvasCloseTextStrength,
        y: newY * OffcanvasCloseTextStrength,
        ease: Power4.easeOut
    })
}

const resetOffcanvasClose = (event) => {
    // Move button to initial position
    gsap.to(OffcanvasClose, {
        duration: 1,
        x: 0,
        y:0, 
        ease: Elastic.easeOut
    })

    gsap.to(OffcanvasCloseText, {
        duration: 1,
        x: 0,
        y:0, 
        ease: Elastic.easeOut
    })
}

OffcanvasClose.addEventListener('mousemove', activateOffcanvasClose)
OffcanvasClose.addEventListener('mouseleave', resetOffcanvasClose)

// Miscellaneous

let navList = document.querySelector('.nav-list')

let headerTitle = document.querySelector('.header-title')
let headShot = document.querySelector('.header-img')
let headerTagline = document.querySelector('.header-tagline')
let socialBar = document.querySelector('.social-bar')
let header = document.querySelector('#header')


let about = document.querySelector('#about')
let aboutBG = document.querySelector('.about-bg')
let aboutTags = document.querySelectorAll('.about-tag')
let aboutDesc = document.querySelector('.about-desc')
let aboutText = document.querySelector('.about-text')

let contact = document.querySelector('#contact')
let contactBG = document.querySelector('.contact-bg')

gsap.set(headerTitle, {
    xPercent: 0,
    opacity: 1
})

gsap.set(navList, {
    xPercent: 50,
    opacity: 0
})

gsap.set(menu, {
    scale: 0.5,
    opacity: 0,
})

gsap.set(aboutText, {
    yPercent: 100,
    opacity: 0
})

gsap.set(aboutBG, {
    opacity: 0
})

gsap.set(contactBG, {
    opacity: 0
})

gsap.to(headShot, {
    scrollTrigger: {
        trigger: header,
        start: 'top',
        scrub: true
    },
    yPercent: 20,
    scale: .8,
    opacity: 0
})

gsap.to(socialBar, {
    scrollTrigger: {
        trigger: header,
        start: 'top',
        scrub: true
    },
    opacity: 0,
})

gsap.to(magneto, {
    scrollTrigger: {
        trigger: headerTitle,
        start: 'top',
        scrub: true,
    },
    scale: 1.5,
    opacity: 0
})

gsap.to(menu, {
    scrollTrigger: {
        trigger: header,
        start: 'top',
        scrub: true,
    },
    scale: 1,
    opacity: 1
})

gsap.to(headerTitle, {
    scrollTrigger: {
        trigger: header,
        start: 'top',
        scrub: true
    },
    yPercent: -100,
    opacity: 0
})

gsap.to(headerTagline, {
    scrollTrigger: {
        trigger: header,
        start: 'top',
        scrub: true
    },
    yPercent: -100,
    opacity: 0
})

gsap.to(navList, {
    scrollTrigger: {
        trigger: navList,
        toggleActions: "restart",
    },
    delay: 6,
    xPercent: 0,
    opacity: 1,
    duration: 1
})

gsap.to(aboutText, {
    scrollTrigger: {
        trigger: about,
        start: 'top 50%',
        toggleActions: "restart",
    },
    opacity: 1,
    yPercent: 0,
    duration: 1
})

gsap.to(aboutBG, {
    scrollTrigger: {
        trigger: about,
        toggleActions: 'restart'
    },
    delay: .5,
    opacity: 1,
    duration: 2
})

aboutTags.forEach((aboutTag, index) => {
    gsap.set(aboutTag, {
        xPercent: -20,
        opacity: 0
});

    gsap.to(aboutTag, {
        scrollTrigger: {
            trigger: aboutTag,
            toggleActions: "restart",
        },
        delay: index * 1,
        xPercent: 0,
        opacity: 1
})
})

gsap.to(contactBG, {
    scrollTrigger: {
        trigger: contact,
        toggleActions: 'restart'
    },
    delay: .5,
    opacity: 1,
    duration: 2
})