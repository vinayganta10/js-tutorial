let numbers = [1,2,3,4,5];
let another = numbers;

//solution1
//numbers = [];

//solution2
//numbers.length = 0;

//solution3
//numbers.splice(0,numbers.length);

//solution4
while(numbers.length>0){
    numbers.pop();
}

//the first solution doesn't work if any other array is referenced to original array.
