const nameOutputEl = document.querySelector("#name-output")

const inputEl = document.querySelector("#name-input")

// inputEl.addEventListener("input", (evnt) => {
//     if (event.currentTarget.value === "") {
//         nameOutputEl.textContent = "Anonymous"
//     } else {
//     nameOutputEl.textContent=event.currentTarget.value
//     }
// })


inputEl.addEventListener("input", () => {
    if (inputEl.value === "") {
        nameOutputEl.textContent = "Anonymous"
    } else {
   nameOutputEl.textContent = inputEl.value
    }
})