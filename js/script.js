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

// Функція, яка показує форму та приховує блок з привітанням
function showLoginForm() {
  userInfo.style.display = "none";
  mainForm.style.display = "block";
}

// Обробник події для форми
function formHandler(event) {
  event.preventDefault();
  const name = document.getElementById("nameField").value;
  saveToStorage("userName", name);
  saveToStorage("isAuthenticated", true);
  checkAuthorization();
}

// Обробник події для кнопки виходу
function logoutHandler(event) {
  event.preventDefault();
  localStorage.removeItem("userName");
  localStorage.removeItem("isAuthenticated");
  checkAuthorization();
}

// Збереження у локальне сховище
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Отримання з локального сховища
function getFromStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

// Додавання обробників подій
mainForm.addEventListener("submit", formHandler);
logoutButton.addEventListener("click", logoutHandler);

// Перевірка авторизації при завантаженні сторінки
checkAuthorization();

// Варіант 1: Запустити toggleSections після кожної операції логін/логаут
function toggleSections(hasUser = false) {
  if (hasUser) {
    showUserInfo(getFromStorage("userName"));
  } else {
    showLoginForm();
  }
}

// Варіант 2: Примусово перезавантажити сторінку та знов показати необхідний блок
function reloadPage() {
  location.reload();
}
