// scopes of js
//! global scope :It means the variable a can be used anywhere in the program. 
//! local scope: Local Scope occurs when you create a variable inside a function.
//! block scope: This scope restricts the variable that is declared inside a specific block, from access by the outside of the block.


// example of global scope
var a = 10;
function  func1(){
    console.log(a);
}
 func1();
console.log(a);

// example of local scope
function func2(){
    var a = 10;
    console.log(a);
}
func2();
console.log(a);

// example of block scope
function func3(){
    if(true){
        var a = 10;
        console.log(a);
    }
    console.log(a);
}
func3();
console.log(a);