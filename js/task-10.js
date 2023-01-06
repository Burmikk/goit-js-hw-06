function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("input")
const createEl = document.querySelector("[data-create]")
const divBoxEl = document.querySelector("#boxes")
const destroyEl =document.querySelector ("[data-destroy]")

createEl.addEventListener("click", onCreateElement)

function onCreateElement() {
  let size = 30;
  let arr = []

  const inputValue = Number(inputEl.value)
  
  for (let i = 0; i < inputValue; i += 1)  {
    
    let divCreate = document.createElement("div")
    divCreate.style.width = `${size}px`
    divCreate.style.height = `${size}px`
    divCreate.style.backgroundColor = getRandomHexColor()
    arr.push(divCreate)
    size += 10
  }
  divBoxEl.append(...arr)
  return arr
}


destroyEl.addEventListener("click", onDestroyElement)

function onDestroyElement() {
  divBoxEl.innerHTML = ""
}



