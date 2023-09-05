counter = 0;

function watch(){
    console.clear();
    console.log(counter);
    counter += 1;
}

setInterval(watch,1000);