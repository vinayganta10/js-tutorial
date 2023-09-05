let person = {
    firstName:"vinay",
    lastName:"ganta",
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    }, 
    set fullName(value){
        if(typeof(value) !== 'string')
            throw new Error('Value is not a string');
        let parts = value.split(" ");
        if(parts.length !== 2)
            throw new Error('Enter first name and last name');
        person.firstName = parts[0];
        person.lastName = parts[1];
    }
};

console.log(person.fullName);
try{
    person.fullName = "";
}
catch(e){
    alert(e);
}
console.log(person.fullName);