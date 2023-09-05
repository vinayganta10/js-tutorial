//finding references

const courses = [
    {id:1,name:'a'},
    {id:2,name:'b'},
    {id:3,name:'c'},
];

//arrow function
const course = courses.findIndex(course => course.id === 3);

const course1 = courses.find(function(a){
    return a.id === 2;
})

console.log(course);
console.log(course1);
console.log(courses.indexOf(course1));