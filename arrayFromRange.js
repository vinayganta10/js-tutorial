const numbers = arrayRange(-10,4);

console.log(numbers);

function arrayRange(min,max){
    const output = [];
    for(let i = min;i <= max;i++)
        output.push(i);
    return output;
}