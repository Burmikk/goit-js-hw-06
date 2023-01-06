const inputEl = document.querySelector("input")
inputEl.addEventListener("blur", () => {
   
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add("valid")
        inputEl.classList.remove("invalid")
    }
    // Удаляет стили если в инпуте ничего нет
    // else if (inputEl.value === "") {
    //      inputEl.classList.remove("valid","invalid") 
    // }
        
    else {
        inputEl.classList.add("invalid")
        inputEl.classList.remove("valid")
    }
    
})
