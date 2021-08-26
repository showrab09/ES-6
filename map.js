const numbers = [2, 5, 9, 10, 100];

//arrow function
const doubleIt = (number) => number * 2;
//loop through array
//function call
//push element in new array
const newArray = numbers.map(doubleIt);

console.log(newArray);

//new array
const friends = ["Tom Hardy", "tom hiddlsten", "tom cruise", "tom halland"];
const newArray2 = friends.map((friend) => friend.length);
console.log(newArray2);

//Array object

const products = [
  { name: "Sunglass", price: 80, color: "Black" },
  { name: "Watch", price: 800, color: "White" },
  { name: "Perfume", price: 50, color: "white" },
  { name: "Headphone", price: 70, color: "orange" },
  { name: "Condom", price: 600, color: "golden" },
  { name: "Bat", price: 809, color: "green" },
  { name: "Pipe", price: 770, color: "goldenrod" },
];
//want to display products name in a array
const names = products.map((pd) => pd.name);
console.log(names);
