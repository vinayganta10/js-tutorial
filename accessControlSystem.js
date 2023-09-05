//read,write,execute
//00000100
//00000010
//00000001

const read = 4;
const write = 2;
const execute = 1;

let myPermission = 0;

myPermission = myPermission | execute;// or bitwise operator(|) for giving access
console.log(myPermission);

let message = (myPermission & execute) ? "yes" : "no";//and bitwise operator(&) for checking access.
console.log(message);

