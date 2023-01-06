let counterValue = 0

const plusEl = document.querySelector('[data-action="increment"]')

const minusEl = document.querySelector('[data-action="decrement"]')

const valueEl = document.querySelector("#value")

const nullEl = document.querySelector('[data-action = "null"]')

valueEl.textContent=counterValue

plusEl.addEventListener('click', () => {
    counterValue += 1
    valueEl.textContent = counterValue
    
})

minusEl.addEventListener('click', () => {
    counterValue -= 1
    valueEl.textContent = counterValue
})


// use only if two button

// const handleBtnClick = ({target}) => {
//     console.log(target)
//     counterValue = target.dataset.action === "increment" ? counterValue + 1 : counterValue - 1
//     value.textContent = counterValue
// }

// plusEl.addEventListener('click', handleBtnClick)
// minusEl.addEventListener('click', handleBtnClick)



