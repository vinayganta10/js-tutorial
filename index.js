//comment
console.log("Hello world");
let rectangle = {
    l : 5,
    b : 10,
    location : {
        x : 1,
        y : 1
    },
    draw: function(){
        console.log("draw");
    }
};

rectangle.draw();
console.log(rectangle.location);
console.log(rectangle.l);
console.log(rectangle.b);