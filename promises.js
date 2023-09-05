function promiseBody(resolve){
    setTimeout(resolve,5000);
}

function request(){
    return new Promise(promiseBody);
}

function print(){
    console.log("Recieved");
}

let promise = request();
console.log(promise);
promise.then(print);
