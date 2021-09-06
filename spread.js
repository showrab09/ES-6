const ages = [23, 45, 20, 12, 69, 70];
console.log(ages);
console.log(...ages);

const max = Math.max(...ages);
const min = Math.min(...ages);

console.log("Maximum is " + max);
console.log("Minimum is " + min);

// const ages2 = ages;
// ages.push(300);
// console.log(ages2);

//creating new array with previous array values 
const ages2 = [...ages, 900]; //we can add new value in front and later of ...
ages.push(300);
console.log(ages2);
