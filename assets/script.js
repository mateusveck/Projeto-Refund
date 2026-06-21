const form = document.querySelector("#form")
const title = document.querySelector("#title")
const category = document.querySelector("#category")
const price = document.querySelector("#price")
const button = document.querySelector("#button")
const list = document.querySelector("#list")

function checkForm() {
  if (category.selectedIndex === 0) {
    button.disabled = true
  } else {
    button.disabled = false
  }
}
category.addEventListener("change", checkForm)

let expenses = []


form.addEventListener('submit' , (event) =>{
    event.preventDefault()

let despesas = {
    title: title.value,
    category: category.value,
    price: price.value,

}

 expenses.push(despesa)

  console.log(despesa)
  console.log(expenses)

})

