// ------------ DAILY CHALLENGE ------------
const h1 = document.querySelector('h1');
const label = document.querySelector('label');
const input = document.querySelector('input');
const button = document.querySelector('button');
let num = 0;
let counter = 0;
let numbers = [];
let intOne;
let intTwo;
let result;
label.innerHTML = "Please enter a number"

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

// Prompt the user for two different numbers and display which, if any, is larger
button.addEventListener("click", () => {
  num = input.value;
  input.value=''
  input.focus();
  
  if (counter < 2) {
    if (/^[+-]{0,1}\d+$/.test(num)) {
      numbers.push(num);
      counter ++;
    } 
    else {
      alert("Your input is not a number, please enter a number");
    }
  }
  
  if (counter===2) {
    // Convert the values to integers
    // Store the two integers as variables
    intOne = parseInt(numbers[0]);
    intTwo = parseInt(numbers[1]);

    // Compare the two numbers
    if (intTwo === intOne) {
      result = `${intTwo} is equal to ${intOne}`;
    } else if (intTwo > intOne) {
      result = `${intTwo} is larger than ${intOne}`;
    } else {
      result = `${intOne} is larger than ${intTwo}`;
    }
    console.log(result)
    h1.innerHTML = result;

    counter = 0;
    numbers = [];
  }
  if (counter===1) {
    label.innerHTML = "Please enter a second number"
  }
  if (counter===0) {
    label.innerHTML = "Please enter a number"
  }
});