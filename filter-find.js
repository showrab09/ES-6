//using filter

const numbers = [2, 50, 48, 2, 34, 23, 45, 67, 500, 78, 15, 10, 7];
const bigNumbers = numbers.filter((bn) => bn > 20);
const smallNumbers = numbers.filter((bn) => bn < 20);

// console.log("bigger than 20 numbers are " + bigNumbers);
// console.log("Smaller than 20 numbers are " + smallNumbers);

//it can works for object also

const products = [
  { name: "Sunglass", price: 800, color: "black" },
  { name: "Watch", price: 800, color: "White" },
  { name: "Perfume", price: 50, color: "white" },
  { name: "Headphone", price: 70, color: "orange" },
  { name: "Condom", price: 600, color: "golden" },
  { name: "Bat", price: 809, color: "green" },
  { name: "Mobile", price: 77000, color: "black" },
];
const blackProducts = products.filter((product) => product.color == "black");
// console.log(blackProducts);

//filter can gives multiple value in an array
//find gives only one value
const blackItems = products.find((product) => product.color == "black");
console.log(blackItems);
