
// Number of categories
const allItems = document.querySelectorAll(".item")
console.log("Number of categories:", allItems.length)
console.log(allItems)

// forEach + textContent + length
allItems.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent)
    console.log("Elements:", item.lastElementChild.children.length)
})