const form = document.querySelector("#form")
const title = document.querySelector("#title")
const category = document.querySelector("#category")
const price = document.querySelector("#price")
const button = document.querySelector("#button")
const list = document.querySelector("#list")
const template = document.querySelector("#expense-template")
const finalResult = document.querySelector(".final-result")

const categories = {
  alimentacao: {
    name: "Alimentação",
    icon: "assets/imgs/icons/Food.svg"
  },
  hospedagem: {
    name: "Hospedagem",
    icon: "assets/imgs/icons/Bed.svg"
  },
  transporte: {
    name: "Transporte",
    icon: "assets/imgs/icons/Car.svg"
  },
  servicos: {
    name: "Serviços",
    icon: "assets/imgs/icons/Receipt.svg"
  },
  outros: {
    name: "Outros",
    icon: "assets/imgs/icons/Wrench.svg"
  }
}

function checkForm() {
  if (category.selectedIndex === 0) {
    button.disabled = true
  } else {
    button.disabled = false
  }
}
category.addEventListener("change", checkForm)

let expenses = []

function renderExpenses() {
  list.innerHTML = ""

  expenses.forEach((despesa) => {
    const item = template.content.cloneNode(true)

    const categoryInfo = categories[despesa.category]

    item.querySelector(".expense-title").textContent = despesa.title
    item.querySelector(".expense-category").textContent = categoryInfo.name

    item.querySelector(".expense-icon").src = categoryInfo.icon
    item.querySelector(".expense-icon").alt = categoryInfo.name

    item.querySelector(".expense-price").textContent = despesa.price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    item.querySelector(".expense-delete").addEventListener("click", () => {
      expenses = expenses.filter((expense) => expense.id !== despesa.id)

      renderExpenses()
    })

    list.append(item)
  })
}

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
    id: Date.now(),
    title: expenseTitle,
    category: expenseCategory,
    price: expensePrice,

}

expenses.push(despesa)
renderExpenses()
form.reset()
checkForm()


})
