function loadEvent() {
    console.log("Page loaded :)")

    const list = document.querySelectorAll("section")

    for (const elem of list) {
        elem.insertAdjacentHTML("beforeend", `
        <p>text</p>
        `)
        //elem.querySelector("h1").outerHTML = ""
    }
}
window.addEventListener("load", loadEvent)