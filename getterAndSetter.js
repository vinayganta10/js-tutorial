function Circle(radius){
    this.radius = radius;
    let location = {x : 1,y : 1};
    this.draw = function(){
        console.log("draw");
    };
    Object.defineProperty(this,'getLocation',{
        get(){
            return location;
        },
        set(value){
            if(!value.x || !value.y){
                throw new Error('Invalid location')
            } 
            location = value;
        }
    });
}
let circle = new Circle(10);
circle.draw();
console.log(circle.getLocation);
circle.getLocation = {x:10,y:10};
console.log(circle.getLocation);

