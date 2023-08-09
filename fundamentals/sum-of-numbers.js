//Sum of Numbers

function getSum(a, b) {
  numbers = [];

  if (a >= b) {
    while (a >= b) {
      numbers.push(b++);
    }
    let sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    console.log(sum);
  } else if (b >= a) {
    while (b >= a) {
      numbers.push(a++);
    }
    let sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    console.log(sum);
  } else if (a === b) {
    return a;
  }
};
  
getSum(2, 10)
