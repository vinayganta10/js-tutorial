function Person(name){
    this.name = name;
    this.walk = function(){
        console.log(name + " can walk")
    }
}

let vinay = new Person("vinay");
let usha = new Person("usha");
let kanishik = Person.apply({},["kanishik"]);
console.log(vinay.name);
vinay.walk();
usha.walk();
kanishik.walk();