# JAVA SCRIPT
## Topics you need to know about java sript
### About
- single threaded - no matter how many cores are in the machine js uses single core to run its code.
- Asynchronus code - but we can make it a type of synchronus by using callback functions.
- Loosely typed language
- Execution of js:
> js code -> transpiled js code -> Abstract syntax tree(AST) ->byte code ->js vm executes the code.
- interpreted or compiled or jit compiled???
> answer : js is a just in time compiled language that uses an interpreter in the first phase

---

### Basics
1. The default value of any variable is undefined.
2. js variables doesn't need any decleration.
3. arrays in js are declared by square brackets.
>note:array is also an object.
---
### Operators
1. arithemetic operators(+,-,*,/,%,**)
2. Assignment operators(+=,=)
3. comparison operators(<,>,===,==,!)
  strict equality(===) - checks the type and value.
  lose equality(==) - checks for only value.
4. logical operators(&&,||)
5. In js,there are two types of boolean,
  >- Falsy-undefined,null,0,false,'',NaN
  >- Truthy-other than Falsy
5. bitwise operators(|,&)
---
### Control-flow
1. if-else
2. switch case
3. for loop
4. while
5. do-while
6. for in loop
> note:when we iterate over any array by using for in loop it returns the indexes of the array.
7. for of loop
> note:but the for of loop returns the values in the arrray instead of indexes.
8. break and continue statements
---
### Objects
- an object in java script is essentially a key value pairs(The keys can be objects,functions or values).
note: We should not always use object literals.
- Factories are used to rectify repitition of code.we can create many objects from a factory.
  The syntax used is creating a function and return the key value pairs.
- Constructors are very similar to factories and almost have the same use.
  The name of the constructor should always start with Capital letter.
  we use this keyword to set the properties of the constructor.
  we use new operator for creating the object.
  the new operator creates an object literal({}) and points the object to the constructor and returns the propeties to the object.
note:Not using new keyword while creating an object may lead to create global variables which is a bad pratice of programming of js. 
- Every object has a constructor property and it prints the constructor on the console. 
- Every funtion is a object in js.
- We can create a object from contructor by call method instead of using a new keyword.
  Syntax: ConstName.call({},value1,value2,...);
  There is an another method called apply which works same as call method but takes the arguments in an array.
  Syntax: ConstName.apply({},[value1,value2,...]);
- Primitive types:         
   1. number				
   2. string				
   3. boolean			
   4. null
   5. symbol
   6. undefined
- Reference types:
1. object
2. funtion
3. array
- Primitive are copied by their value and objects are copied by reference
- we can add and remove properties from a constructor using the created object.
  > we can add properties by two methods 
  1. objName.property = value;
  2. objName['property'] = value;
  delete:
  delete objName['property'];
- We can iterate over properties by using for loop.
- the in operator is available in js which returns a boolean value.
  we can check for the existence of a property in the constructor by using in operator.
- js provide data abstraction.
- local variables are created when a new object is created.
 closure is created only once when a object created.
- getter and setter methods are used to access the private members in the constructor,
  the getter and setter functions are defined in defineProperty method of Object.
- Math is a builtin object which contains all math functions such as min,max,round,ceil,random,etc.
- String is of two types:
   1. primitive strings()- syntax - let message = " ";
   2. object strings()-syntax - let another = new string(" ");
- string object support many string methods.
- template literals- denoted by `` ``. 
   used for indentation and new line purposes in strings.
   Especially when you write a email template literals are used.

---
### Arrays
1. adding of numbers to an array-
 > - push() - to add elements at the end of an array.
 > - unshift() - to add elements at the beginning of the array.
 > - splice()- to add elements in the middle of the array.
2. searching of elements of primitive types in the array can be done by two methods-
  > - indexOf() - if element exists it returns the index else returns -1.
  > - includes()- if exists returns true else returns false.
3. searching of elements of reference types in the array-
  > - find(function(a){return condition}) - returns the object if true else returns undefined.
  > - findIndex(function(a){return condition}) - returns the index if true else returns -1.
4. arrow functions (=>):It is first introduced in ES6,denoted by =>.
  They are used when you want to write a function and pass it to any method as a argument.
  This type of method makes the code look simple.
5. removing of numbers from array-
  > - pop() - remove element from the end of the array.
  > - shift() - remove element from the start of the array.
  > - splice() - to remove elements from middle of the array.
6. we can combine two arrays using concat() method and slice two arrays using slice() method.
  > note:if the elements in array are reference(objects) type,then any change occured in array reflects in combined array
       or sliced array.
7. we can also combine arrays with spread operator(...) which is provided in ES6.
  it makes the code simpler.
8. we can iterate in a array by using two methods:
  > - forEach() - which takes backFunction as a parameter.
  > - for() of loop

  > note: difference between in and of operator:
   if we iterate a array using in operator it returns the indexes of the array,but the of operator returns all the elements in the array.
9. Join() and split() methods are used to convert the array to a string or combing any strings.
10. sort() is used to sort the array.
11. reverse() is used to reverse the array.
12. To sort the objects we need to write a backFunction and send it as a parameter to sort function.
13. There are two methods which are added to java recently:
  > - Every()-The critreia should be true for every element in the array.
  > - some()-The criteria should be true for atleast one element in the array.
> They return a boolean value,that if the following criteria is true it returns true,else it return false.
14. filter method returns an array of the values only which follow the criteria.
15. map method is used to map every element of an array to a function and generates a new array.
16. reduce method is used to reduce the array into a single value.Like map method it takes every
   element and applies a function.It takes two parameters accumalator and current value.It applies
   the function and stores it in the accumalator.
---
### Functions
1. function decleration - function(){}
  semicolon is not required.
  fn declaration supports hoisting.
2. function expression - a function is initialized to a variable or a constant.
  let var = function(){};
  semicolon is required.
  fn expression doesn't supports hoisting.
3. hoisting - when the js engine executes the code,all the function declarations are moved to
  the top of the code.so,when we call any function before the declaration,it gets executed.
4. arguments keyword is the array of arguments passed to the any function.
5. the rest operator(...) is similar to spread operator.it takes the arguments as an array.
  note: we cannot pass argument after rest operator.
6. default arguments are arguments which are initialized in the function declaration.If the argument
  is not passed it takes the default value.
---