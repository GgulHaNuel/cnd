$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const select = (el) => document.querySelector(el);
    const selectAll = (el) => document.querySelectorAll(el);

    const AniYTop = selectAll('.aniYTop');
    const AniYTop_2 = selectAll('.aniYTop_2');
    const AniYTopD = selectAll('.aniYTopD');
    const AniYTopD_2 = selectAll('.aniYTopD_2');
    const AniYTopD_3 = selectAll('.aniYTopD_3');
    const AniXLt = selectAll('.aniXLt');
    const AniXGt = selectAll('.aniXGt');
    const AniXLtD = selectAll('.aniXLtD');
    const AniXLtD_2 = selectAll('.aniXLtD_2');

    AniYTop.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 100,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    AniYTop_2.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: -100,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    AniYTopD.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            y: 100,
            ease: 'power3.out',
            duration: 2,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    function MOAniYTopD_2(content, index) {
        gsap.from(content, {
            opacity: 0,
            y: 100,
            ease: 'power3.out',
            duration: 2,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    }

    if (window.innerWidth <= 885) {
        AniYTopD_2.forEach((content, index) => {
            gsap.from(content, {
                opacity: 0,
                y: 100,
                ease: 'power3.out',
                duration: 1.5,
                scrollTrigger: {
                    trigger: content,
                    start: 'top 100%',
                    end: 'bottom 20%',
                    markers: false,
                    toggleActions: 'play none none none',
                    scrub: false,
                },
            });
        });
    } else {
        AniYTopD_2.forEach(MOAniYTopD_2);
    }

    function MOAniYTopD_3(content, index) {
        gsap.from(content, {
            opacity: 0,
            y: 100,
            ease: 'power3.out',
            duration: 2,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    }

    if (window.innerWidth <= 885) {
        AniYTopD_3.forEach((content, index) => {
            gsap.from(content, {
                opacity: 0,
                y: 100,
                ease: 'power3.out',
                duration: 1.5,
                scrollTrigger: {
                    trigger: content,
                    start: 'top 100%',
                    end: 'bottom 20%',
                    markers: false,
                    toggleActions: 'play none none none',
                    scrub: false,
                },
            });
        });
    } else {
        AniYTopD_3.forEach(MOAniYTopD_3);
    }

    AniXLt.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: -150,
            ease: 'power3.out',
            duration: 1.5,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    AniXGt.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: 150,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    AniXLtD.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: -150,
            ease: 'power3.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });

    AniXLtD_2.forEach((content, index) => {
        gsap.from(content, {
            opacity: 0,
            x: -150,
            ease: 'power3.out',
            duration: 1.5,
            stagger: 0.2,
            delay: index * 0.3,
            scrollTrigger: {
                trigger: content,
                start: 'top 100%',
                end: 'bottom 20%',
                markers: false,
                toggleActions: 'play none none none',
                scrub: false,
            },
        });
    });
});
