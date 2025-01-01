let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(Number(prompt(`Enter number ${i}:`)));
}
let largest = Math.max(...numbers);
alert(`The largest number is: ${largest}`);