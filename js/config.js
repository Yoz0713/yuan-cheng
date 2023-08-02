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

    console.log(menu, firstPageHeight, window.scrollY)
    if (window.scrollY < firstPageHeight * 1) {
        menu.style.backgroundColor = "transparent"
    } else {
        menu.style.backgroundColor = "#736357"
    }

}
