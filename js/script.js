let userLevel = localStorage.getItem("userLevel") ? parseInt(localStorage.getItem("userLevel")) : 1;
let userCoins = localStorage.getItem("userCoins") ? parseInt(localStorage.getItem("userCoins")) : 5;
let inventory = localStorage.getItem("inventory") ? JSON.parse(localStorage.getItem("inventory")) : [];

function startGame() {
  let aiNumber = Math.floor(Math.random() * 100);
  console.log(aiNumber);
  let userGuess = Number(prompt("Вибери число, яке загадав Штучний Інтелект (від 0 до 100):"));
  if (userGuess === aiNumber) {
    alert("Вітаю! Ви виграли, додаю 100 монет!");
    userCoins += 100;
    userLevel += 1;
  } else {
    alert("Поразка! :(");
  }
  saveData();
  updateUI();
}

function openShop() {
  document.getElementById('shopModal').style.display = 'flex';
}

function closeShop() {
  document.getElementById('shopModal').style.display = 'none';
}

function buyItem(itemName, price) {
  if (userCoins >= price) {
    userCoins -= price;
    inventory.push(itemName);
    alert(`Ви купили ${itemName}!`);
    saveData();
    updateUI();
    updateInventory();
  } else {
    alert("Недостатньо монет!");
  }
}

function saveData() {
  localStorage.setItem("userLevel", userLevel);
  localStorage.setItem("userCoins", userCoins);
  localStorage.setItem("inventory", JSON.stringify(inventory));
}

function updateUI() {
  document.getElementById('level').innerText = userLevel;
  document.getElementById('coins').innerText = userCoins;
  updateInventory();
}

function updateInventory() {
  const inventoryList = document.getElementById('inventoryList');
  inventoryList.innerHTML = "";
  inventory.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    inventoryList.appendChild(li);
  });
}

updateUI();