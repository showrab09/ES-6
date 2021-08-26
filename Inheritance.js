//super class
class HeroTeam {
  name;
  address;
  age;
  constructor(name, addr, age) {
    this.name = name;
    this.address = addr;
    this.age = age;
  }
}
//support Instructor class
class SupportInstructor extends HeroTeam {
  role = "Support Instructor";
  time;
  constructor(name, addr, age, time) {
    super(name, addr, age);
    this.time = time;
  }
  startSession() {
    console.log(this.name + " Please start a conference for student ");
  }
}
//admin class
class Admin extends HeroTeam {
  role = "Admin Panel";
  time;
  constructor(name, addr, age, time) {
    super(name, addr, age);
    this.time = time;
  }
  update() {
    console.log(this.name + " Please Update the score board");
  }
}
//student class
class Student extends HeroTeam {
  role = "Student of Batch 3";
  exam() {
    console.log(this.name + " Please Submit your assignment");
  }
}
//sending the parameters
const amir = new SupportInstructor("Amir Khan", "Bangladesh", 20, "10 PM");
const showrab = new Admin("Showrab Bin Habib", "Germany", 28, "8 PM");
const shehnaj = new Student("Shehnaj Tasnim", "Bangladesh", 20);

console.log(amir, showrab, shehnaj);
//calling the Method(function) from class
amir.startSession();
showrab.update();
shehnaj.exam();
