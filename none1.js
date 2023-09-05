function calculateTime(n) {
    let start = new Date().getTime();
    let sum = 0;
    for(let i =0;i<n;i++){
        sum += i;
    }
    let end = new Date().getTime();
    console.log((end-start)/1000);
}

calculateTime(100000000);