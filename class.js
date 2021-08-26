class SupportInstructor {
  name;
  role = "Support Instructor";
  address;
  age;
  constructor(name, addr, age) {
    this.name = name;
    this.address = addr;
    this.age = age;
  }
  startSession() {
    console.log(this.name + " Please start a conference for student ");
  }
}
const amir = new SupportInstructor("Amir Khan", "Bangladesh", 20);
const showrab = new SupportInstructor("Showrab Bin habib", "Germany", 23);
console.log(amir, showrab);
//calling the Method(function) from class
amir.startSession();
