numbers = [1,2,3,4];

const output = move(numbers,3,-1);

console.log(output);

function move(array,index,offset){
    const n = index + offset;
    if((n>=0)&&(n<array.length)){
        temp = array[index];
        array[index] = array[n];
        array[n] = temp;
        return array;
    }
    else
        console.error('Invalid offset');
}