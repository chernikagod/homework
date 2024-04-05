class User {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, birthYear) {
    super(firstName, lastName, birthYear);
    this.marks = new Array(30).fill(null);
    this.attendance = new Array(30).fill(null);
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  }

  setMark(mark) {
    const index = this.marks.indexOf(null);
    if (index !== -1) {
      this.marks[index] = mark;
    }
  }

  get mediumMark() {
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    const count = this.marks.filter((mark) => mark !== null).length;
    return sum / count;
  }

  get mediumVisit() {
    const sum = this.attendance.reduce(
      (acc, isPresent) => acc + (isPresent ? 1 : 0),
      0
    );
    return sum / this.attendance.length;
  }

  get summary() {
    const mediumMark = this.mediumMark;
    const mediumVisit = this.mediumVisit;

    if (mediumMark > 9 && mediumVisit > 0.9) {
      return `Середня оцінка: ${mediumMark.toFixed(
        2
      )}. Середнє відвідування: ${mediumVisit.toFixed(
        2
      )}. Молодець! Так тримати!`;
    } else if (mediumMark > 9 || mediumVisit > 0.9) {
      return `Середня оцінка: ${mediumMark.toFixed(
        2
      )}. Середнє відвідування: ${mediumVisit.toFixed(
        2
      )}. Норм. Але можна постаратись і краще.`;
    } else {
      return `Середня оцінка: ${mediumMark.toFixed(
        2
      )}. Середнє відвідування: ${mediumVisit.toFixed(
        2
      )}. Погано! Так ти нічому не навчишся.`;
    }
  }
}

class Teacher extends User {
  constructor(firstName, lastName, birthYear) {
    super(firstName, lastName, birthYear);
    this.groups = [];
  }

  addGroup(group) {
    this.groups.push(group);
  }

  changeStatus(group) {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      group.status = !group.status;
    }
  }

  get activeGroups() {
    return this.groups.filter((group) => group.status);
  }
}

const student = new Student("Іван", "Петров", 2000);
student.present();
student.setMark(8);
student.setMark(9);
student.absent();
console.log(student.summary);

const teacher = new Teacher("Марія", "Іванова", 1975);
const group1 = { name: "Група 1", status: true };
const group2 = { name: "Група 2", status: false };
teacher.addGroup(group1);
teacher.addGroup(group2);
teacher.changeStatus(group1);
console.log(teacher.activeGroups);
