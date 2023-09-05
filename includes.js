const numbers = [1,2,3,4];

//const isFound = numbers.includes(1);

function includes(array,searchElement){
    for(let i of array){
        if(i === searchElement){
            return true;
        }
    }
    return false;
};

const isFound = includes(numbers,1);

console.log(isFound);