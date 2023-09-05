function createCircle(radius) {
    return{
        radius,
        draw : function(){
            console.log('draw')
            console.log(radius)
        }
    }
}

let Circle = createCircle(1);
let cylinder = createCircle(10);
Circle.draw();
cylinder.draw();

