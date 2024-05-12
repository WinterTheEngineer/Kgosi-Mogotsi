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