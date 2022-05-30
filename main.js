
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

let counter = 0;
let balanceText = qs('.balance')

//data variables for pushing values from incomes 
let incomesTotal = 0;
let incomes = []

//expense selectors 
const expenseInput = qs('.expense-input');
const expenseAmount = qs('.expense-amount');
const expenseButton = qs('.expense-button');
const expenseContainer = qs('.expense-container');
const expenseList = qs('.expense-list');
const expenseTotalDOM = qs('.expense-total')

// data for pushing expenses 
let expenseTotal = 0;
let dataForExpense = {};

for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].addEventListener("click", formHandler)
    console.log("działa")
} // petla po to żeby przciski + nie przeładowywały strony 

function formHandler(event) {
    console.log(event)
    event.preventDefault();

}

const addIncome = () => {
    let income = {
        id: counter++,
        title: incomeInput.value,
        amount: incomeAmount.value
    }
    incomes.push(income);
    console.log(incomes)
    const incomeDiv = ce('div');
    incomeDiv.classList.add('income')
    const incomeItem = ce('li');
    incomeItem.innerText = `${income.title} ${income.amount}`
    incomeItem.classList.add('income-item');
    const editBtn = ce('button');
    editBtn.setAttribute('type', 'button')
    editBtn.innerText = "Edit"
    editBtn.classList.add('edit-btn');
    incomeItem.appendChild(editBtn);
    incomeDiv.appendChild(incomeItem)
    incomeList.appendChild(incomeDiv);

  //  editBtn.addEventListener('click', editIncome(editBtn,incomeDiv,income,incomeItem))
}
incomeButton.addEventListener('click', addIncome);
// const editIncome = (button,parentEl,income,incomeItem) => {
//     if (button.textContent === "Edit") {
//        // let currentId = incomes.length;
//         //  let updateElement = incomes.find(income => income.id === currentId)
       

//         //potrzebny mi rodzic do, którego wstawie li --- czyli mój incomeDiv (parentEL)
//         // tworze sobie li, które przyjmnie wartosc z tworzoneg inputa 

//         let incomeLI = ce('li');
//         let input = ce('input');
//         // potrzebna mi wartosc ktora wpisze do inputa, czyli wartosc z pierwszwgo obiekty który jest zamieszczony 
//         let currentValue = incomes.find(income=> income.title[0]);
//         incomeLI.innerHTML = currentValue
//         input.value = incomeLI.textContent
//         incomeLI.appendChild(input);
//         parentEl.appendChild(incomeLI);
//         parentEl.insertBefore(input,incomeLI);
//         let oldIncome = incomeItem.textContent
//         incomeLI.appendChild(oldIncome);
//     }
// }
// incomeButton.addEventListener('click', addIncome);