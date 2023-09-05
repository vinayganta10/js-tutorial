function Circle(radius){
    this.radius = radius;//closure
    let location = {x : 1,y : 1};
    let updateLoc = function(){
        //...
    };
    this.draw = function(){
        updateLoc({x:10,y:10});
        let x,y;//local variables
        console.log("draw");
    }
}

let circle = new Circle(10);