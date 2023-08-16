// methods of loop 
// !1. for loop
//! 2. while loop
// !3. do while loop
// !4. for in loop
//! 5. for of loop


// example of for loop
 for (let i = 0; i < 10; i++) {
        console.log(i);
        
    }

// example of while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// example of do while loop
let nun = 0;
do {
    console.log(i);
    i++;
}
while (i < 10);

// example of for in loop
let obj = {
    name: "sagar",
    age: 20,
    type: "programmer",
    os: "ubuntu"
}
for (let key in obj) {
    console.log(`the ${key} of object is ${obj[key]}`);
}
// example of for of loop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let element of arr) {
    console.log(element);
}

// example of break and continue statement
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let element of arr) {
    if (element == 5) {
        break;
    }
    console.log(element);
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let element of arr) {
    if (element == 5) {
        continue;
    }
    console.log(element);
}
