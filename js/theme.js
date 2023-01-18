let btnToggle = document.getElementById("btn-change-theme")
let isDarkTheme = window.localStorage.getItem("isDarkTheme")
if (isDarkTheme == null) {
    document.body.style.backgroundColor = "#292C35"
    btnToggle.style.left = "4.375rem"
}
btnToggle.addEventListener("click", () => {
    if (btnToggle.style.left == "4.375rem") {
        btnToggle.style.left = "0.625rem"
        window.localStorage.setItem("isDarkTheme", "0.625rem")
        document.body.style.backgroundColor = "#F1F1F1"
    } else {
        btnToggle.style.left = "4.375rem"
        window.localStorage.clear()
        document.body.style.backgroundColor = "#292C35"
    }

})