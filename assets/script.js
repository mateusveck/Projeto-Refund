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

const expenseTitle = title.value.trim()
const expenseCategory = category.value
const expensePriceText = price.value.trim().replace(",", ".")
const expensePrice = Number(expensePriceText)

if (expenseTitle === "") {
  console.log("Preencha o título da despesa")
  return
}

if (expensePriceText === "") {
  console.log("Preencha o valor da despesa")
  return
}

if (Number.isNaN(expensePrice) || expensePrice <= 0) {
  console.log("Digite um valor válido")
  return 
}

let despesa = {
    title: expenseTitle,
    category: expenseCategory,
    price: expensePrice,

}

expenses.push(despesa)
form.reset()
checkForm()


})
