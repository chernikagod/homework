function user_ask() {
  function askName() {
    let name = prompt("Як тебе звуть");
    return name;
  }

  function askAge() {
    let age = prompt("Скільки вам років?");
    if (isNaN(age) || age === "" || age === null) {
      age = prompt("Будь ласка, введіть коректний вік цифрами.");
    }
    return parseInt(age);
  }

  function askSmoke() {
    let smoker = confirm("Ви курите? (так/ні)");
    return smoker;
  }

  const name = askName();
  const age = askAge();
  const smoker = askSmoke();

  if (age < 18 && smoker == false) {
    alert(`Молодець ${name}! Гарний приклад для своїх однолітків.`);
  } else if (age < 18 && smoker == true) {
    alert(`${name}, а твої батьки знають про це?`);
  } else if (age >= 18 && smoker == false) {
    alert(`Супер ${name}! Мабуть, ще й спортом займаєшся!`);
  } else if (age >= 18 && smoker == true) {
    alert(`Що ж ${name}, це твій вибір. Але я не радив би курити.`);
  } else {
    alert("Неправильні введені дані. Будь ласка, перевірте свої відповіді.");
  }
}

user_ask();
