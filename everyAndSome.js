const numbers = [2,4,-1,10];

const allPositives = numbers.every(value => value>=0);

const atLeastOnePositive = numbers.some(value => value>=0);

console.log(allPositives);
console.log(atLeastOnePositive);