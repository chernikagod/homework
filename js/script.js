let latestUser = logedUsers[0];
logedUsers.forEach((user) => {
  if (user.last_login > latestUser.last_login) {
    latestUser = user;
  }
});

console.log("Користувач який найпізніше заходив на сайт:", latestUser);

let youngestUser = generalUsers[0];
generalUsers.forEach((user) => {
  if (user.age < youngestUser.age) {
    youngestUser = user;
  }
});

let oldestUser = generalUsers[0];
generalUsers.forEach((user) => {
  if (user.age > oldestUser.age) {
    oldestUser = user;
  }
});

let totalAge = 0;
generalUsers.forEach((user) => {
  totalAge += user.age;
});

const averageAge = Math.round(totalAge / generalUsers.length);

console.log("Наймолодший користувач:", youngestUser);
console.log("Найстарший користувач:", oldestUser);
console.log("Середній вік користувачів:", averageAge);

generalUsers.sort(
  (a, b) => Math.abs(a.age - averageAge) - Math.abs(b.age - averageAge)
);

const closestUsers = generalUsers.slice(0, 16);

console.log(
  "16 користувачів з віком, найближчим до середнього віку:",
  closestUsers
);

const userCardsContainer = document.querySelector(".user-cards");

closestUsers.forEach((user) => {
  const card = `
      <div class="user-card">
        <img src="${user.image}" alt="User Image">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Age: ${user.age}</p>
        <p>Email: <a href="mailto:${user.email}">${user.email}</a></p>
        <p>Phone Number: <a href="tel:${user.phone}">${user.phone}</a></p>
      </div>
    `;
  userCardsContainer.innerHTML += card;
});
