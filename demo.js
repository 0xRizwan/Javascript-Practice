/* var a = alert("Mohammed Rizwan");

let b = function(x,y){
    console.log(`The sum is ${x+y}`);
}
b(5,10); */


/* var arr = [[10,20,30], ["Mohammed", "Rizwan", "Taaj"],[true, false]];
console.log(arr[2][0]); */

/* let student = {
    name: "Mohammed",
    rollNo: 50,
    div: "a",
    sibling: ["Imran", "Irfan"] 
} */

/* let list = [
    {
        age: 50,
        addr: "India",
    },
    {
        age: 52,
        addr: "UK",
    }
]
console.log(list[1].age);      */                             // Calling object from array i.e object is within array. 

/* let array = ["cat", "dog", "money"];

for(let i= 0; i<array.length; i++){

    console.log(array[i]);
} */

/* let array1 = ["cat", "dog", "money"];

array1.forEach(function(i){
    console.log(i);                                            // for each loop
}) */

/* function myFunction(){
    document.getElementById("demo").innerHTML = "Mohammed Rizwan";
 } */

/* let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function(){
    h1.innerHTML = input.value;

}) */ 

// Advanced javascript
// Ternary operator
/* let m = 5;
let n = 10;
let result;

result = m>n? "m is greater than n" : "m is smaller than n";
console.log(result); */

// Destructuring in JS
/* let car = {                                    //First create the basic object.
    name: "Ferari",
    model: "abc",
    cost: 50
}

let {name, model,cost} = car;                  //Format of destructuring for objects in JS.
console.log(name, model,cost); */

// Arrow function
/* const sum = (a,b) => {                         // Format for Arrow function.
    return a + b;
}
console.log(sum(5,10)); */ 

// const sum1 = (a,b) => a + b;                  // Another shortcut for Arrow function.     
// console.log(sum(5,10));

// // Mapping in JS
// let normalArray = [5,10,15,20,25];

// let mapArray = normalArray.map((num) => {
//     return num * 5;
// })
// console.log(mapArray);

// // Filter in JS
// let normalArray1 = [5,10,15,20,25];

// let mapArray1 = normalArray.filter((num) => {
//     return num > 5;
// })
// console.log(mapArray1);

// //Synchronous javascript
// console.log(1);
// console.log(2);
// console.log(3);

// //Asynchronous javascript
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// },3000);
// console.log(3);

//Asynchronous javascript....another method
// function greeting(){
//     console.log("I am Mohammed Rizwan")
// }
// setTimeout(greeting,3000);

// // Spread operator
// let arr2 = [1,2,3];
// let arr3 = [...arr2];                     // format for spread operator...used to add data in continuation to previous data.
// arr3.push(5);


// console.log(arr2);
// console.log(arr3);

// //Destructuring practice- object

// const localForcast = {
//     yesterday: {
//         low:61, high:75},
//     today: {
//         low:61, high:75},
//     tomorrow: {
//         low:61, high:75}
//     };

// const {yesterday,today,tomorrow} = localForcast;
// console.log(today);

// // Array Destructuring 

// const array5 = [1,5,10,50];

// const[r,p,q,s]= array5;
// console.log(r,p,q,s);


// let as = [5,10,15,20]

// let as1 = as.map((value) => {
//     return value * 2;
// });
// console.log(as1);

//Callback and Promises

/* Scenarios
1. Register
2. Send welcome email
3. Login
4. Get user data
5. display user data
*/ 

/* Simple asynchronous function working with setTimeout
function register(){
    setTimeout(() => {
        console.log("register end");
    },3000);
}

function sendWelcomeEmail(){
    setTimeout(() => {
        console.log("email end");
    }, 3000);
}

function login(){
    setTimeout(() => {
        console.log("login end");
    }, 3000)
}

function getUserData(){
    setTimeout(() => {
        console.log("getData end");
    },3000);
}

function displayUserData(){
    setTimeout(() => {
        console.log("displayData end");
    },3000);
}

register();
sendWelcomeEmail();
login();
getUserData();
displayUserData();
 */

/* Normal callback working (for basic understanding)
let's say every function is executing with almost time.

function register(callback){
    setTimeout(() => {
        console.log("register end");
        callback();
    },3000);
}

function sendWelcomeEmail(){
    setTimeout(() => {
        console.log("email end");
    }, 1000);
}

function login(){
    setTimeout(() => {
        console.log("login end");
    }, 1000)
}

function getUserData(){
    setTimeout(() => {
        console.log("getData end");
    },1000);
}

function displayUserData(){
    setTimeout(() => {
        console.log("displayData end");
    },1000);
}

register(() => {
    sendWelcomeEmail();
    login();
    getUserData();
    displayUserData();
});

*/ 

/* callback working for different timing functions
 let's say different function is executing with different time(that one nammak ka khada).

function register(callback){
    setTimeout(() => {
        console.log("register end");
        callback();
    },3000);
}

function sendWelcomeEmail(callback){
    setTimeout(() => {
        console.log("email end");
        callback();
    }, 2000);
}

function login(){
    setTimeout(() => {
        console.log("login end");
    }, 1000)
}

function getUserData(){
    setTimeout(() => {
        console.log("getData end");
    },1000);
}

function displayUserData(){
    setTimeout(() => {
        console.log("displayData end");
    },1000);
}

// callback hell 
register(() => {
    sendWelcomeEmail(() => {                    //select function and copy paste remaining function inside it to execute in order. 
        login();                                 // It is creating nested functions
        getUserData();                           // It is not readable and complex while passing arguments or parameters. 
        displayUserData();
    });
});

*/

