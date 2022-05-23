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
// incomeList.addEventListener('click', removeOrEditIncome);
//expenseList.addEventListener('click', removeOrEditExpense)

// //functions
function formHandler(event) {
    console.log(event)
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
    editButton.classList.add('edit-btn')
    editButton.setAttribute('type', 'button');
    incomeDiv.appendChild(editButton)

    // editButton.addEventListener('click', editIncome(incomeDiv));
    //editIncome(incomeDiv)
    //delete button 
    const deleteButton = ce('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteButton.classList.add('trash-btn');
    deleteButton.addEventListener('click', removeIncome)
    incomeDiv.appendChild(deleteButton);
    //append to list 
    incomeList.appendChild(incomeDiv);
    editButton.addEventListener('click', editIncome(incomeDiv,editButton));
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
    editButton.setAttribute('type', 'button')
    // editButton.addEventListener('click', edit)
    expenseDiv.appendChild(editButton)
    //delete button 
    const deleteButton = ce('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteButton.classList.add('trash-btn');
    deleteButton.addEventListener('click', removeExpense)
    expenseDiv.appendChild(deleteButton);
    //append to list 
    expenseList.appendChild(expenseDiv);

    expenseInput.value = '';
    expenseAmount.value = '';
}
//TODO naprawić błąd, zrobić jedną funkcje ale żeby elementy były niezależnie od sieie usuwane
function removeIncome(e) {
    e.preventDefault()
    const item = e.target;
    console.log(item)
    if (item.classList[0] === 'trash-btn') {
        const budgetItem = item.parentElement;
        budgetItem.remove()
    }
}


function removeExpense(e) {
    e.preventDefault()
    const item = e.target;
    if (item.classList[0] === 'trash-btn') {
        const budgetItem = item.parentElement;
        // console.log(budgetItem)
        budgetItem.remove()
    }
}

function editIncome(e, element) {
    // e.preventDefault()
    // const div = e
    // console.log(div);
    // let li = e.childNodes[0];
    // console.log(li)
     const button = e.childNodes[1]
    // console.log(button)
if(element.textContent !== `<i class="fa-solid fa-pen-to-square"></i>` ){
    let inputForUpdateIncome = ce('input');
    inputForUpdateIncome = e.childNodes[0];
       let li = ce('li');
        li.textContent = inputForUpdateIncome.value
        e.insertBefore(li, inputForUpdateIncome)
        e.removeChild(inputForUpdateIncome)
        button.textContent === "edit"
 
//  li = e.childNodes[0];
    // let inputForUpdateIncome = ce('input');
    // console.log(li.textContent)
    // inputForUpdateIncome.type = "text";
    // inputForUpdateIncome.value = li.textContent;
    // console.log(inputForUpdateIncome.value)
    // li.appendChild(inputForUpdateIncome)
    // e.insertBefore(inputForUpdateIncome, li)
    // e.removeChild(li)
    // button.textContent = "Zapisz";F
}

        // console.log("click click")
        // let li = e.childNodes[0];
        // let inputForUpdateIncome = ce('input');
        // console.log(li.textContent)
        // inputForUpdateIncome.type = "text";
        // inputForUpdateIncome.value = li.textContent;
        // console.log(inputForUpdateIncome.value)
        // li.appendChild(inputForUpdateIncome)
        // e.insertBefore(inputForUpdateIncome, li)
        // e.removeChild(li)
        // // button.textContent = "Zapisz";
    }
    // } else if (button.textContent === "Zapisz") {
        // inputForUpdateIncome = e.childNodes[0];
        // li = ce('li');
        // li.textContent = inputForUpdateIncome.value
        // e.insertBefore(li, inputForUpdateIncome)
        // e.removeChild(inputForUpdateIncome)
        // button.textContent === "edit"
    // }



// parent.addEventListener('click', e)
//   const button = e.target
// if (button.classList[0] === 'edit-btn') {
//     const liValue = element.firstElementChild;
//     const input = ce('input');
//     //const amountInput = ce('input');
//     input.type = "text";
//     //amountInput.type = 'number';
//     input.value = liValue.textContent;
//     div.append(input)
//     liValue.insertBefore(input, liValue)

// }






function results() {
    arrayForIncomes.push(+incomeAmount.value)
    console.log(arrayForIncomes)

    let incomeResult = arrayForIncomes.reduce((prev, curr) => prev + curr)
    incomesTotalDOM.textContent = `${incomeResult}`
    // let updateExpense = arrayForExpense.reduce((prev, curr) => prev - curr.value)
    // console.log(updateExpense)

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