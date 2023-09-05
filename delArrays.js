let numbers = [1,2,3,4,5];

const last = numbers.pop();
console.log(numbers);
console.log(last);

const first = numbers.shift();
console.log(numbers);
console.log(first);

numbers.splice(1,1);
console.log(numbers);
