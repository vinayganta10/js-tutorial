import  isAnagram  from "./isAnagram";
function Circle(radius){
    this.radius = radius;
    this.location = {x : 1,y : 1};
    this.draw = function(){
        console.log("draw");
    }
}

let circle = new Circle(10);

if('radius' in circle){
    console.log("Circle has radius.");
}