let hamburgerBars = document.querySelector(".bars")
let aside = document.querySelector("aside")
let asideSpan = document.querySelectorAll("aside span")

let count = 0;
hamburgerBars.addEventListener("click", () => {
    count++
    if (count % 2 == 1) {
        aside.style.width = "5%"
        asideSpan.forEach(span => {
            span.style.visibility = "hidden"
        })
        return;
    }
    aside.style.width = "15%"
    asideSpan.forEach(span => {
        span.style.visibility = "visible"
    })
})