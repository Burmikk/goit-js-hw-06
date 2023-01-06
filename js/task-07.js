const rangeValueEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

rangeValueEl.addEventListener("input", () => {
   textEl.style.fontSize = `${rangeValueEl.value}px`
})