//You're a square!

function isSquare(n){
  if(n >= 0){
  let sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt);
  }else{
    return false
  }
};
