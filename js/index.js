
window.onload = () => {
    // loadingEffect()
    function split() {
        splitText(".titleBox h2");

    }
    split()

    function bannerHoverEffect() {
        const hoverBox = document.querySelectorAll(".first-page .hover-area .box")
        const hoverArea = document.querySelector(".first-page .hover-area")
        const titleArea = document.querySelectorAll(".first-page .banner-titleBox .box")
        const ycceText = document.querySelectorAll(".first-page .ycce p")
        const ycceBox = document.querySelectorAll(".ycce-box div")
        const dotBox = document.querySelectorAll(".first-page .dotBox .dot")
        const videos = document.querySelectorAll(".first-page .videoBox video")
        hoverBox.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
                e.stopPropagation()

                //處理左下標題
                titleArea.forEach((item, i) => {
                    if (item.dataset.title === e.target.dataset.hover) {
                        item.classList.add("active")
                    } else {
                        item.classList.remove("active")
                    }
                })

                //處理中間四個大英文
                ycceText.forEach((item, i) => {
                    if (item.dataset.text === e.target.dataset.hover) {
                        item.classList.add("active")
                    } else {
                        item.classList.remove("active")
                    }
                })

                //處理上下左右小英文
                ycceBox.forEach((item) => {
                    item.classList.remove("active")
                })

                //處理上下左右圓圈
                dotBox.forEach((item) => {
                    if (item.dataset.dot === e.target.dataset.hover) {
                        item.classList.add("active")
                    } else {
                        item.classList.remove("active")
                    }
                })
                //處理背景影片
                videos.forEach((item, i) => {
                    if (item.dataset.video === e.target.dataset.hover) {
                        item.classList.add("active")
                    } else {
                        item.classList.remove("active")
                    }
                })
            })
            hoverArea.addEventListener("mouseleave", (e) => {
                titleArea.forEach((item, i) => {
                    if (item.dataset.title === "eco") {
                        item.classList.add("active")
                    } else {
                        item.classList.remove("active")
                    }
                })
                ycceText.forEach((item, i) => {
                    item.classList.add("active")
                })

                //處理上下左右小英文
                ycceBox.forEach((item) => {
                    item.classList.add("active")
                })

                //處理上下左右圓圈
                dotBox.forEach((item) => {
                    item.classList.remove("active")

                })

                //處理背景影片
                videos.forEach((item, i) => {
                    if (item.dataset.video === "eco") {
                        item.classList.add("active")
                    } else {
                        item.classList.remove("active")
                    }
                })
            })
        })
    }
    bannerHoverEffect()

    function pageAnimation() {
        const firstPage = gsap.timeline()

        firstPage.from(".first-page .roundBox", {

            opacity: 0,
            duration: 1.5
        }).from(".first-page .ycce", {

            opacity: 0,
            duration: 1.5
        }, "<+0.7")



        const secondPage = gsap.timeline({
            scrollTrigger: {
                trigger: ".second-page",
                start: "top 80%",
            }
        });

        secondPage.from(".second-page .titleBox h2 .blind", {
            transform: "rotateY(90deg)",
            duration: 1.3,
            stagger: 0.075,
            x: 30
        }).from(".second-page .titleBox h4", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "<+0.3").from(".second-page .titleBox p", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "<+0.3").from(".second-page .titleBox .more", {
            x: -30,
            opacity: 0,
            duration: 0.8
        }, "<+0.3")

        const secondPageBg = gsap.timeline({
            scrollTrigger: {
                trigger: ".second-page .imgBox",
                start: "top bottom",
                scrub: 1,
            }
        });
        secondPageBg.from(".second-page .imgBox img", {
            x: "-27%",
        })


        const thirdPage = gsap.timeline({
            scrollTrigger: {
                trigger: ".third-page",
                start: "top 80%",
            }
        });

        thirdPage.from(".third-page .left .titleBox h2 .blind", {
            transform: "rotateY(90deg)",
            duration: 1.3,
            stagger: 0.075,
            x: 30,
            onStart: () => {
                setTimeout(() => {
                    document.querySelector(".third-page .left .titleBox > :nth-child(1)").classList.add("active")
                }, 500)
            }
        }).from(".third-page .left .bg img", {

            opacity: 0,
            duration: 0.8
        }, "<+1").from(".third-page .titleBox h4", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "<+0.3").from(".third-page .titleBox p", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "<+0.3").from(".third-page .titleBox .more", {
            x: -30,
            opacity: 0,
            duration: 0.8
        }, "<+0.3")

        const thirdPageBg = gsap.timeline({
            scrollTrigger: {
                trigger: ".third-page .imgBox",
                start: "top 80%",
                scrub: 1,
                end: `+=${window.innerHeight * 1}`
            }
        });
        thirdPageBg.fromTo(".third-page .imgBox img", {
            filter: "brightness(0)",
            scale: 1.2
        }, {
            filter: "brightness(1)",
            scale: 1
        })

        const forthPage = gsap.timeline({
            scrollTrigger: {
                trigger: ".forth-page",
                start: "top 80%"
            }
        })
        forthPage.from(".forth-page .titleBox h2 .blind", {
            transform: "rotateY(90deg)",
            duration: 1.3,
            stagger: 0.075,
            x: 30
        }).from(".forth-page .titleBox h4", {
            y: 30,
            opacity: 0,
            duration: 0.8
        }, "<+0.3").from(".forth-page .titleBox p", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            onStart: () => {
                setTimeout(() => {
                    document.querySelector(".forth-page .titleBox").classList.add("active")
                }, 400)
            }
        }, "<+0.3")

        const projects = document.querySelectorAll(".forth-page .projectBox li")
        projects.forEach((item, i) => {
            this[`gg${i}`] = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%"
                }
            })
            this[`gg${i}`].from(item, {
                y: 30,
                opacity: 0,
                duration: 1
            })
        })




    }

    pageAnimation()

    function changeBodyColor() {
        const body = document.querySelector("body")
        const rangeUnit = (body.clientHeight - document.querySelector(".first-page").clientHeight) / 3
        if (window.scrollY < rangeUnit * 1.2) {
            body.style.backgroundColor = "#9CA5AA"
        } else if (window.scrollY > rangeUnit * 1.2 && window.scrollY < rangeUnit * 2 * 1.2) {
            body.style.backgroundColor = "#e0ded5"
        } else if (window.scrollY > rangeUnit * 2 * 1.2 && window.scrollY < rangeUnit * 3 * 1.2) {
            body.style.backgroundColor = "#9CA5AA"
        }
    }
    changeBodyColor()
    window.onscroll = () => {
        changeBodyColor()
    }
}