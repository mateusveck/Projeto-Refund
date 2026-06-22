const form = document.querySelector("#form")
const title = document.querySelector("#title")
const category = document.querySelector("#category")
const price = document.querySelector("#price")
const button = document.querySelector("#button")
const list = document.querySelector("#list")
const template = document.querySelector("#expense-template")
const expensesCount = document.querySelector("#expenses-count")
const expensesTotal = document.querySelector("#expenses-total")

price.addEventListener("input", () => {
  price.value = price.value.replace(/[^\d,]/g, "")
})

function formatPrice(value) {
  const onlyNumbers = value.replace(/\D/g, "")

  const numberValue = Number(onlyNumbers) / 100

  return numberValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

price.addEventListener("input", () => {
  price.value = formatPrice(price.value)
})

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
      updateSummary()
    })

    list.append(item)
  })
}

function updateSummary() {
  const total = expenses.reduce((sum, despesa) => {
    return sum + despesa.price
  }, 0)

  expensesCount.textContent = `${expenses.length} ${expenses.length === 1 ? "Despesa" : "Despesas"}`

  expensesTotal.textContent = total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function setError(input) {
  input.classList.add("input-error")
}

function removeError(input) {
  input.classList.remove("input-error")
}

form.addEventListener('submit' , (event) =>{
    event.preventDefault()

const expenseTitle = title.value.trim()
const expenseCategory = category.value
const expensePriceNumbers = price.value.replace(/\D/g, "")
const expensePrice = Number(expensePriceNumbers) / 100

if (expenseTitle === "") {
  setError(title)
  return
} else {
  removeError(title)
}

if (expensePriceNumbers === "") {
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
updateSummary()
form.reset()
checkForm()


})
