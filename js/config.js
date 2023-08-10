function loadingEffect() {
    const loadingPage = document.querySelector("#loading-page")
    const loadingBlue = document.querySelector("#loading-page .blue")
    const loadingOuterBox = document.querySelector("#loading-page .outerBox")
    loadingOuterBox.classList.add("active")
    loadingBlue.classList.add("active")
    setTimeout(() => {

        loadingPage.style.opacity = 0
    }, 750)
}


function changeMenuColor() {
    const menu = document.querySelector("#menu")
    const firstPageHeight = document.querySelector(".first-page").clientHeight

    if (window.scrollY < firstPageHeight * 1) {
        menu.style.backgroundColor = "transparent"
    } else {
        menu.style.backgroundColor = "#32596a"
    }

}

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


function hamburger() {
    const hamburger = document.querySelector(".hamburger")
    const menu = document.querySelector("#menu .navBox")
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("is-active")
        menu.style.transform = "translateX(100%)"
        hamburger.className.split(" ").forEach((item) => {
            if (item === "is-active") {
                menu.style.transform = "translateX(0%)"
            }
        })
    })
}