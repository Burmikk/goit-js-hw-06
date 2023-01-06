
const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

 
    const email = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value
 

    if (email === "" || password === "") {
        alert("Fill in all input, pleace")
    } else {
        const formData = {
        email,
        password
    }
        console.log(formData)
         reset()
        
    }

    function reset() {
        
        event.currentTarget.elements.email.value = ""
        event.currentTarget.elements.password.value = ""
 }
  
} 



