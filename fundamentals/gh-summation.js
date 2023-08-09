//Grasshopper - Summation

function summation(n){
  let numbers =[];
  for (let i = 0; i <= n; i++){
    numbers.push(i)
  }
    let sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
    return sum;
  };
