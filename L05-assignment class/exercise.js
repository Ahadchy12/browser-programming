/***********************
1) DOM EASY — Character Counter
*************************/
const msgInput = document.getElementById("msgInput");
const msgStats = document.getElementById("msgStats");

msgInput.addEventListener("input", () => {
  const max = 50;
  const length = msgInput.value.length;
  const remaining = max - length;

  msgStats.innerHTML = `Length: ${length} | Remaining: ${remaining}`;

  if (remaining < 10) {
    msgStats.style.color = "red";
  } else {
    msgStats.style.color = "black";
  }
});


/***********************
2) DOM MEDIUM — Toggle List
*************************/
const itemInput = document.getElementById("itemInput");
const btnAddItem = document.getElementById("btnAddItem");
const btnClearItems = document.getElementById("btnClearItems");
const itemList = document.getElementById("itemList");
const listStats = document.getElementById("listStats");

btnAddItem.addEventListener("click", () => {
  if (itemInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${itemInput.value} <button class="remove">X</button>`;
  itemList.appendChild(li);
  itemInput.value = "";
  updateListStats();
});

btnClearItems.addEventListener("click", () => {
  itemList.innerHTML = "";
  updateListStats();
});

itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
  updateListStats();
});

function updateListStats() {
  const items = itemList.querySelectorAll("li");
  const done = itemList.querySelectorAll(".done");
  listStats.innerHTML = `Items: ${items.length} | Done: ${done.length}`;
}


/***********************
3) STATE EASY — Counter
*************************/
let count = 0;

const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");
const btnZero = document.getElementById("btnZero");

const countOut = document.getElementById("countOut");
const parityOut = document.getElementById("parityOut");

btnMinus.addEventListener("click", () => {
  count--;
  renderCounter();
});

btnPlus.addEventListener("click", () => {
  count++;
  renderCounter();
});

btnZero.addEventListener("click", () => {
  count = 0;
  renderCounter();
});

function renderCounter() {
  countOut.textContent = `Count: ${count}`;
  parityOut.textContent = `Parity: ${count % 2 === 0 ? "Even" : "Odd"}`;
}

renderCounter();


/***********************
4) STATE MEDIUM — Mini Cart
*************************/
let cart = [];

const btnAddApple = document.getElementById("btnAddApple");
const btnAddBanana = document.getElementById("btnAddBanana");
const btnRemoveLast = document.getElementById("btnRemoveLast");
const btnCartClear = document.getElementById("btnCartClear");

const cartOut = document.getElementById("cartOut");
const cartTotals = document.getElementById("cartTotals");

btnAddApple.addEventListener("click", () => dispatch({ type: "ADD", item: { name: "Apple", price: 2 } }));
btnAddBanana.addEventListener("click", () => dispatch({ type: "ADD", item: { name: "Banana", price: 1 } }));
btnRemoveLast.addEventListener("click", () => dispatch({ type: "REMOVE" }));
btnCartClear.addEventListener("click", () => dispatch({ type: "CLEAR" }));

function dispatch(action) {
  switch (action.type) {
    case "ADD":
      cart.push(action.item);
      break;
    case "REMOVE":
      cart.pop();
      break;
    case "CLEAR":
      cart = [];
      break;
  }
  renderCart();
}

function renderCart() {
  cartOut.textContent = "Cart: " + cart.map(i => i.name).join(", ");
  const total = cart.reduce((sum, i) => sum + i.price, 0);
  cartTotals.textContent = `Items: ${cart.length} | Total: €${total}`;
}

renderCart();


/***********************
5) API EASY — localStorage
*************************/
const noteInput = document.getElementById("noteInput");
const btnSaveNote = document.getElementById("btnSaveNote");
const btnLoadNote = document.getElementById("btnLoadNote");
const btnClearNote = document.getElementById("btnClearNote");
const noteOut = document.getElementById("noteOut");

btnSaveNote.addEventListener("click", () => {
  localStorage.setItem("myNote", noteInput.value);
});

btnLoadNote.addEventListener("click", () => {
  const note = localStorage.getItem("myNote");
  noteOut.textContent = `Saved note: ${note}`;
});

btnClearNote.addEventListener("click", () => {
  localStorage.removeItem("myNote");
  noteOut.textContent = "Saved note: ...";
});


/***********************
6) API MEDIUM — Geolocation
*************************/
const btnGetLocation = document.getElementById("btnGetLocation");
const btnClearLocation = document.getElementById("btnClearLocation");
const geoStatus = document.getElementById("geoStatus");
const geoOut = document.getElementById("geoOut");

btnGetLocation.addEventListener("click", () => {
  if (!navigator.geolocation) {
    geoStatus.textContent = "Status: Geolocation not supported";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      geoStatus.textContent = "Status: Success";
      geoOut.textContent =
        `Latitude: ${position.coords.latitude}
Longitude: ${position.coords.longitude}
Accuracy: ${position.coords.accuracy} meters`;
    },
    (error) => {
      geoStatus.textContent = "Status: Permission denied or error";
      geoOut.textContent = error.message;
    }
  );
});

btnClearLocation.addEventListener("click", () => {
  geoStatus.textContent = "Status: ...";
  geoOut.textContent = "...";
});
cc
