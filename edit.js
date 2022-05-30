const ul = document.querySelector(".list");
const incomeDiv = document.querySelector(".incomeDiv");
const item = document.querySelector(".list-item");
const editBtn = document.querySelector(".edit");
const removeBtn = document.querySelector(".remove");

editBtn.addEventListener("click", editIncome);
function editIncome() {
  if (editBtn.textContent === "Edit") {
    let input = document.createElement("input");
    input.type = "text";
    input.value = item.textContent;
   incomeDiv.appendChild(input)
    incomeDiv.insertBefore(input, item);
    editBtn.textContent = "OK";
    // let cancelBtn = document.createElement("button")
    // cancelBtn.textHTML = "cancel"
  incomeDiv.removeChild(item)
  } else if (editBtn.textContent === "OK") {
    let input = incomeDiv.childNodes[0]
    let updateItem = document.createElement("li");
    updateItem.textContent = input.value;
    incomeDiv.insertBefore(updateItem, input);
    incomeDiv.removeChild(input);
    editBtn.textContent = "Edit";
  }
}