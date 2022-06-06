const qs = (selector) => document.querySelector(selector)
const ce = (tag) => document.createElement(tag)
const qsAll = (selectors) => document.querySelectorAll(selectors)
// //selectors 
const submitButtons = qsAll('[name="submit-btn"]');

// incomes selectors
const incomeContainer = qs(".incomes-container");
const incomesTotalDOM = qs(".incomes-total");
const addIncomeForm = qs("#addIncomeForm");


const expenseContainer = qs(".expenses-container");
const expensesTotalDOM = qs(".expenses-total");
const addExpenseForm = qs('#addExpenseForm')

let balanceText = qs('.balance-text');
const balanceTotal = qs(".balance-total");

const newId = () => uuid.v4();

const incomesDOM = qs(".incomes-list");

let incomes = [{
    id: newId(),
    name: "wypłata",
    amount: 2000,
  },
  {
    id: newId(),
    name: "korepetycje",
    amount: 150,
  },
];

const expensesDOM = qs(".expenses-list");
let expenses = [{
    id: newId(),
    name: "zakupy",
    amount: 285,
  },
  {
    id: newId(),
    name: "kino",
    amount: 79,
  }
];

//przychody

const renderIncomes = () => {
  incomesDOM.innerHTML = "";
  incomes.forEach(({
    id,
    name,
    amount
  }) => {
    const li = ce("li");
    li.textContent = `${name} | ${amount} pln`;

    const editButton = ce("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editButton.classList.add("edit-btn");
    editButton.setAttribute("type", "button");

    editButton.addEventListener("click", () => {
      li.textContent = "";
      console.log(li);
      const inputName = ce('input');
      const inputAmount = ce('input');

      const confirmBtn = ce('button');
      confirmBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
      confirmBtn.classList.add('confirm-btn');
      confirmBtn.setAttribute("type", "button");



      const rejectBtn = ce('button');
      rejectBtn.classList.add('cancel-btn');
      rejectBtn.textContent = "cancel";
      rejectBtn.setAttribute("type", "button");

      rejectBtn.addEventListener("click", renderIncomes)

      inputName.setAttribute('id', newId());
      inputAmount.setAttribute('id', newId());

      inputName.value = name;
      inputAmount.value = Number(amount);

      li.appendChild(inputName);
      li.appendChild(inputAmount);
      li.appendChild(confirmBtn);
      li.appendChild(rejectBtn);

      confirmBtn.addEventListener("click", () => {
        li.textContent = `${inputName.value} | ${inputAmount.value} pln`;
        let index = incomes.findIndex((i) => i.id === id);
        incomes[index].name = inputName.value;
        incomes[index].amount = Number(inputAmount.value);
        sumIncomes()
        renderIncomes()

      });
    })

    const deleteButton = ce("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.classList.add("trash-btn");
    deleteButton.setAttribute("type", "button");

    deleteButton.addEventListener("click", () => {
      removeIncome(id);
      sumIncomes();
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    incomesDOM.appendChild(li);
  });
};
//wydatki
const renderExpenses = () => {
  expensesDOM.innerHTML = "";
  expenses.forEach(({
    id,
    name,
    amount
  }) => {
    const li = ce("li");
    li.textContent = `${name} | ${amount} pln`;

    const editButton = ce("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editButton.classList.add("edit-btn");
    editButton.setAttribute("type", "button");

    editButton.addEventListener("click", () => {
      li.textContent = "";
      console.log(li);
      const inputName = ce('input');
      const inputAmount = ce('input');

      const confirmBtn = ce('button');
      confirmBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
      confirmBtn.classList.add('confirm-btn');
      confirmBtn.setAttribute("type", "button");


      confirmBtn.addEventListener("click", () => {
        li.textContent = `${inputName.value} | ${inputAmount.value} pln`;
        let index = expenses.findIndex((i) => i.id === id);
        expenses[index].name = inputName.value;
        expenses[index].amount = Number(inputAmount.value);
        sumExpenses()
        renderExpenses()

      });

      const rejectBtn = ce('button');
      rejectBtn.classList.add('cancel-btn');
      rejectBtn.textContent = "cancel";
      rejectBtn.setAttribute("type", "button");

      rejectBtn.addEventListener("click", renderExpenses)

      inputName.setAttribute('id', newId());
      inputAmount.setAttribute('id', newId());

      inputName.value = name;
      inputAmount.value = Number(amount);

      li.appendChild(inputName);
      li.appendChild(inputAmount);
      li.appendChild(confirmBtn);
      li.appendChild(rejectBtn);


    })

    const deleteButton = ce("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.classList.add("trash-btn");
    deleteButton.setAttribute("type", "button");

    deleteButton.addEventListener("click", () => {
      removeExpense(id);
      sumExpenses();
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    expensesDOM.appendChild(li);
  });
};

const removeIncome = (id) => {
  incomes = incomes.filter((item) => item.id !== id);
  renderIncomes();
};

const removeExpense = (id) => {
  expenses = expenses.filter((item) => item.id !== id);
  renderExpenses()
}

const sumIncomes = () => {
  incomesTotalDOM.textContent = incomes.reduce(
    (acc, {
      amount
    }) => acc + amount,
    0
  );
calculateBalance()
};

const sumExpenses = () => {
  expensesTotalDOM.textContent = expenses.reduce(
    (acc, {
      amount
    }) => acc + amount,
    0
  );
calculateBalance()
};

const calculateBalance = () =>{
  balanceTotal.textContent = incomesTotalDOM.textContent - expensesTotalDOM.textContent;
  if(incomesTotalDOM.textContent === expensesTotalDOM.textContent){
    balanceText.textContent = `Balans wynosi ${balanceTotal.textContent}`
  }else if(incomesTotalDOM.textContent > expensesTotalDOM.textContent){
    balanceText.textContent = `Możesz wydać jeszcze ${balanceTotal.textContent}`
  }else{
    balanceText.textContent = `Jesteś na minusie ${balanceTotal.textContent}`
  }
  removeExpense()
  removeIncome()
  renderExpenses()
  renderIncomes()
}

const addIncome = (e) => {
  e.preventDefault();

  const {
    name,
    amount
  } = e.currentTarget.elements;

  const newIncome = {
    id: newId(),
    name: name.value,
    amount: Number(amount.value),
  };

  incomes = [...incomes, newIncome];
  renderIncomes();
  sumIncomes();
};

const addExpense = (e) => {
  e.preventDefault();

  const {
    name,
    amount
  } = e.currentTarget.elements;

  const newExpense = {
    id: newId(),
    name: name.value,
    amount: Number(amount.value),
  };

  expenses = [...expenses, newExpense];

  sumExpenses();
};
addIncomeForm.addEventListener("submit", addIncome);
addExpenseForm.addEventListener("submit", addExpense)

sumIncomes();
sumExpenses();
renderIncomes();
renderExpenses();