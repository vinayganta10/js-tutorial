function Circle(radius){
    this.radius = radius;
    this.location = {x : 1,y : 1};
    this.draw = function(){
        console.log("draw");
    }
}

let circle = new Circle(10);

for (let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key,circle[key]);
}

console.log(Object.keys(circle));