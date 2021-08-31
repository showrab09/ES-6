//creating object using class
class students {
    constructor(name, age) {
        this.studentName = name;
        this.studentAge = age;
    }
}
const student1 = new students('John Hanks', 69);
const student2 = new students('John Doe', 69);
console.log(student1);
console.log(student2);