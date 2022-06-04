const qs = (selector) => document.querySelector(selector)
const ce = (tag) => document.createElement(tag)
const qsAll = (selectors) => document.querySelectorAll(selectors)
// //selectors 
const submitButtons = qsAll('[name="submit-btn"]');

// incomes selectors
const incomeContainer = qs(".incomes-container");
const incomesTotalDOM = qs(".incomes-total");
const addIncomeForm = qs("#addIncomeForm");

const balanceText = qs(".balance");

const newId = () => uuid.v4();

const incomesDOM = qs(".incomes-list");
let incomes = [
  {
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
let expenses = [];

//przychody

const renderIncomes = () => {
  incomesDOM.innerHTML = "";
  incomes.forEach(({ id, name, amount }) => {
    const li = ce("li");
    li.textContent = `${name} | ${amount} pln`;

    const editButton = ce("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editButton.classList.add("edit-btn");
    editButton.setAttribute("type", "button");

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
const removeIncome = (id) => {
  incomes = incomes.filter((item) => item.id !== id);
  renderIncomes();
};

const sumIncomes = () => {
  incomesTotalDOM.textContent = incomes.reduce(
    (acc, { amount }) => acc + amount,
    0
  );
};

const addIncome = (e) => {
  e.preventDefault();

  const { name, amount } = e.currentTarget.elements;

  const newIncome = {
    id: newId(),
    name: name.value,
    amount: Number(amount.value),
  };

  incomes = [...incomes, newIncome];
  renderIncomes();
  sumIncomes();
};
addIncomeForm.addEventListener("submit", addIncome);

sumIncomes();
renderIncomes();