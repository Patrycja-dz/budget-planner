const qs = (selector) => document.querySelector(selector)
const ce = (tag) => document.createElement(tag)

//selectors 
const submitButtons = document.querySelectorAll('[name="submit-btn"]')

// incomes selectors 
const incomeInput = qs('.income-input');
const incomeAmount = qs('.income-amount');
const incomeButton = qs('.income-button');
const incomeContainer = qs('.incomes-container');
const incomeList = qs('.incomes-list');
const incomesTotalDOM = qs('.incomes-total')

let balanceText = qs('.balance')

let incomesTotal = 0;
let arrayForIncomes = [{
    id: 1,
    name: 'wypłata',
    amount: 2000
}, {
    id: 2,
    name: 'korepetycje',
    amount: 150
}];

let expenseTotal = 0;
let arrayForExpense = []

//przychody

const addIncome = () => {
    incomeList.innerHTML = ""
    arrayForIncomes.forEach(({
        id,
        name,
        amount
    }) => {
        // console.log(id,name,amount)
        const newIncome = ce('li');
        const incomeName = ce('p');
        incomeName.textContent = name;

        const incomeAmount = ce('span');
        incomeAmount.textContent = `${amount} pln`;

        const editButton = ce('button');
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
        editButton.classList.add('edit-btn');
        editButton.setAttribute('type', 'button');

        const deleteButton = ce('button');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
        deleteButton.classList.add('trash-btn');
        deleteButton.setAttribute('type', 'button');

        newIncome.appendChild(incomeName);
        newIncome.appendChild(incomeAmount);
        newIncome.appendChild(editButton);
        newIncome.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            removeIncome(id)
        })

        incomeList.appendChild(newIncome);

    })
}
const removeIncome = (id) => {
    const updatedIncome = arrayForIncomes.filter((item) => item.id !== id);
    arrayForIncomes = updatedIncome
    addIncome()
}

const sumIncomes = () => {
    incomesTotal = arrayForIncomes.reduce((a, b) => a + b.amount, 0);
    console.log(incomesTotal)
    addIncome()
}
sumIncomes()
addIncome()