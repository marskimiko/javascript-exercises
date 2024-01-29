const sumAll = function(num1, num2) {
  // find range between num 1 and num 2
  let array = [];
  let sum = 0;

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) {
    return 'ERROR'
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      array.push(i);
    }
  } else if (num2 < num1) {
    for (let i = num2; i <= num1; i++) {
      array.push(i);
    }
  }
  

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  
  return sum;

};

// Do not edit below this line
module.exports = sumAll;
