console.log("It works!");

const userNameTarget = document.getElementById("userName");
const mainForm = document.getElementById("mainForm");
const userInfo = document.getElementById("userInfo");
const logoutButton = document.getElementById("logout");

// Функція, яка перевіряє, чи є користувач авторизованим
function checkAuthorization() {
  const isAuthenticated = getFromStorage("isAuthenticated");
  if (isAuthenticated) {
    const userName = getFromStorage("userName");
    showUserInfo(userName);
  } else {
    showLoginForm();
  }
}

// Функція, яка показує блок з привітанням та приховує форму
function showUserInfo(userName) {
  userNameTarget.textContent = userName;
  userInfo.style.display = "block";
  mainForm.style.display = "none";
}

function showLoginForm() {
  userInfo.style.display = "none";
  mainForm.style.display = "block";
}

function formHandler(event) {
  event.preventDefault();
  const name = document.getElementById("nameField").value;
  saveToStorage("userName", name);
  saveToStorage("isAuthenticated", true);
  checkAuthorization();
}

function logoutHandler(event) {
  event.preventDefault();
  localStorage.removeItem("userName");
  localStorage.removeItem("isAuthenticated");
  checkAuthorization();
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

mainForm.addEventListener("submit", formHandler);
logoutButton.addEventListener("click", logoutHandler);

checkAuthorization();

function toggleSections(hasUser = false) {
  if (hasUser) {
    showUserInfo(getFromStorage("userName"));
  } else {
    showLoginForm();
  }
}

function reloadPage() {
  location.reload();
}
