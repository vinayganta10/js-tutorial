numbers = [2,5,1,3,4];
courses = [
    {id:3,name:"java"},
    {id:1,name:"python"},
    {id:2,name:"C++"}
];

console.log(numbers.sort());
console.log(numbers);

courses.sort((a,b) => {
    if(a.id>b.id) return 1;
    if(a.id<b.id) return -1;
    else return 0;
});
console.log(courses);
