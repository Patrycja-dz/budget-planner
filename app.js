// helper functions 
const qs = (selector) => document.querySelector(selector)
const ce = (tag) => document.createElement(tag)

//selectors 
const submitButtons = document.querySelectorAll('[name="submit-btn"]')
console.log(submitButtons)
// incomes selectors 
const incomeInput = qs('.income-input');
const incomeAmount = qs('.income-amount');
const incomeButton = qs('.income-button');
const incomeContainer = qs('.incomes-container');
const incomeList = qs('.incomes-list');
const incomesTotalDOM = qs('.incomes-total')

let balanceText = qs('.balance')

let incomesTotal = 0;
let arrayForIncomes = [];


let expenseTotal = 0;
let arrayForExpense = []
//expenses selectors 

const expenseInput = qs('.expense-input');
const expenseAmount = qs('.expense-amount');
const expenseButton = qs('.expense-button');
const expenseContainer = qs('.expense-container');
const expenseList = qs('.expense-list');
const expenseTotalDOM = qs('.expense-total')

//events

// prevent forms from submitting 
for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].addEventListener("click", formHandler)
    console.log("działa")
}


incomeButton.addEventListener('click', addIncome);
expenseButton.addEventListener('click', addExpense);
incomeList.addEventListener('click', removeIncome);
expenseList.addEventListener('click', removeExpense)

// //functions
function formHandler(event) {
    event.preventDefault();
}

function addIncome() {
    const incomeDiv = ce('div');
    incomeDiv.classList.add('income');
    //create li
    const newIncome = ce('li');
    newIncome.innerText = `${incomeInput.value} ${+incomeAmount.value}`;
    newIncome.classList.add('income-item');
    incomeDiv.appendChild(newIncome);
    // arrayForIncomes.push(+incomeAmount.value)
    // console.log(arrayForIncomes)
    results()

    //edit button 
    const editButton = ce('button');
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
    editButton.classList.add('edit-btn');
    incomeDiv.appendChild(editButton)
    //delete button 
    const deleteButton = ce('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteButton.classList.add('trash-btn');
    incomeDiv.appendChild(deleteButton);
    //append to list 
    incomeList.appendChild(incomeDiv);
    //clear
    incomeInput.value = '';
    incomeAmount.value = ''
}

function addExpense() {
    const expenseDiv = ce('div');
    expenseDiv.classList.add('expense');
    //create li
    const newExpense = ce('li');
    newExpense.innerText = `${expenseInput.value} ${+expenseAmount.value}`;
    newExpense.classList.add('expense-item');
    expenseDiv.appendChild(newExpense);

    results()
    //edit button 
    const editButton = ce('button');
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
    editButton.classList.add('edit-btn');
    expenseDiv.appendChild(editButton)
    //delete button 
    const deleteButton = ce('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteButton.classList.add('trash-btn');
    expenseDiv.appendChild(deleteButton);
    //append to list 
    expenseList.appendChild(expenseDiv);
    expenseInput.value = '';
    expenseAmount.value = '';
}
//TODO naprawić błąd, zrobić jedną funkcje ale żeby elementy były niezależnie od sieie usuwane
function removeIncome(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const budgetItem = item.parentElement;
        budgetItem.remove
    }
}

function removeExpense(e) {
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const budgetItem = item.parentElement;
        budgetItem.remove
    }
}

function results() {
    arrayForIncomes.push(+incomeAmount.value)
    console.log(arrayForIncomes)

    let incomeResult = arrayForIncomes.reduce((prev, curr) => prev + curr)
    incomesTotalDOM.textContent = `${incomeResult}`


    arrayForExpense.push(+expenseAmount.value)
    let expenseResult = arrayForExpense.reduce((prev, curr) => prev + curr)
    expenseTotalDOM.textContent = `${expenseResult}`
    balance(incomeResult, expenseResult)
}

function balance(number1, number2) {
    let balanceResult;
    if (number1 > number2) {
        balanceResult = number1 - number2;
        balanceText.innerHTML = `Możesz wydać jeszcze ${balanceResult}`
    } else if (number1 < number2) {
        balanceResult = (number2 - number1)
        balanceText.innerHTML = `Jesteś na minusie -${balanceResult}`
    } else {
        balanceResult = number1 === number2
        balanceText.innerHTML = `Balans wynosi 0`
    }
}