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