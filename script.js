const STORAGE_KEY = "expense-tracker-items";
const form = document.querySelector("#expense-form");
const list = document.querySelector("#expense-list");
let expenses = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  render();
}
function formatMoney(value) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}
function render() {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  document.querySelector("#total").textContent = formatMoney(total);
  document.querySelector("#count").textContent = expenses.length;
  list.innerHTML = "";
  if (!expenses.length) {
    list.innerHTML = '<li class="empty">No expenses yet. Add your first one above.</li>';
    return;
  }
  expenses.slice().reverse().forEach(item => {
    const li = document.createElement("li");
    const details = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("small");
    const amount = document.createElement("strong");
    const remove = document.createElement("button");
    title.textContent = item.description;
    meta.textContent = `${item.category} · ${item.date}`;
    amount.textContent = formatMoney(item.amount);
    remove.textContent = "Delete";
    remove.className = "delete";
    remove.type = "button";
    remove.addEventListener("click", () => {
      expenses = expenses.filter(expense => expense.id !== item.id);
      save();
    });
    details.append(title, meta);
    const right = document.createElement("div");
    right.append(amount, document.createElement("br"), remove);
    li.append(details, right);
    list.append(li);
  });
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const description = document.querySelector("#description").value.trim();
  const amount = Number(document.querySelector("#amount").value);
  if (!description || !Number.isFinite(amount) || amount <= 0) return;
  expenses.push({
    id: crypto.randomUUID(),
    description,
    amount,
    category: document.querySelector("#category").value,
    date: new Date().toLocaleDateString("en-IN")
  });
  form.reset();
  save();
});
document.querySelector("#clear").addEventListener("click", () => {
  if (expenses.length && confirm("Delete all expenses?")) {
    expenses = [];
    save();
  }
});
render();
