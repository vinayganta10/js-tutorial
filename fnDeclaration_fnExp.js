walk();//hoisting
//run(); hoisting not supported.

function walk(){
    console.log('walk');
}

let run = function(){
    console.log('run');
};

let move = run;
walk();
run();
move();
