const n = 10;
let a = 1;
let b = 1;
if(n === 1)
    console.log(1);
else{
    console.log(a);
    console.log(b);
    for(let i = 2;i<n;i++){
        c = a+b;
        console.log(c);
        a = b;
        b = c;
    }
}
