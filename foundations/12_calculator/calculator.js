const add = function(num1,num2) {
  return num1+num2;
};

const subtract = function(num1,num2) {
  return num1-num2;
};

const sum = function(numArray) {
	let sum = 0;
  for(let i=0; i<numArray.length;i++){
    sum += numArray[i];
  }
  return sum; 
};

const multiply = function(numArray) {
	let product = 1;
  for(let i=0; i<numArray.length;i++){
    product *= numArray[i];
  }
  return product; 
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {

  if(num === 0){
    return 1;
  }
  let factorial = 1;
  for(let i=1; i<=num; i++){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
