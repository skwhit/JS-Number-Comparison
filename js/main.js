// ------------ DAILY CHALLENGE ------------
const h1 = document.querySelector('h1');
const label = document.querySelector('label');
const input = document.querySelector('input');
const button = document.querySelector('button');
let num = 0;
let counter = 0;
let numbers = [];
let result;
let fraction;
label.innerHTML = "Please enter a number"

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

// Prompt the user for two different numbers and display which, if any, is larger
button.addEventListener("click", () => {
  console.log(input.value);
  if (/\//.test(input.value)) {
      num = input.value.split('/');
      num = Number(num[0],10)/Number(num[1],10);
    }
  else if (/\,/.test(input.value)) {
    num = input.value.split(',');
    num = Number(num.join(''));
  }
  else {
    num = Number(input.value);
  }
  console.log(num);
  input.value=''
  input.focus();
  
  if (counter < 2) {
        if(!isNaN(num)&&num!=0) {
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
    for (let i=0; i<numbers.length;i++) {
      if (/\//.test(numbers[i])) {
        fraction = numbers[i];
        fraction = fraction.split('/')
        numbers[i] = Number(fraction[0],10)/Number(fraction[1],10);
      }
    }

    // Compare the two numbers
    if (numbers[1] === numbers[0]) {
      result = `${numbers[1]} is equal to ${numbers[0]}`;
    } else if (numbers[1] > numbers[0]) {
      result = `${numbers[1]} is larger than ${numbers[0]}`;
    } else {
      result = `${numbers[0]} is larger than ${numbers[1]}`;
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