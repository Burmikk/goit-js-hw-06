function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;  
}

const bodyEl = document.querySelector("body")

const changeColorBtnEl = document.querySelector(".change-color")

// Change by clicking on the button

changeColorBtnEl.addEventListener('click', onChangeColor )

function onChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor()

 }




// Comment code above and try dynamic changes

// changeColorBtnEl.addEventListener('click', startChangeColor )

// function ChangeColor() {
//   bodyEl.style.backgroundColor = getRandomHexColor()

//  }

// function startChangeColor() {
//   setInterval(ChangeColor,500 );
// }
