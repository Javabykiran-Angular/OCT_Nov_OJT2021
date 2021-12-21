//anonymous function
var temp1 = function () {
    console.log("First type of anonymous function is called");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(4, 6);
// console.log(`Addition is ${res}`);
// Fat Arrow Function/Arrow Function
var temp3 = function () {
    console.log("fat arrow function is called...");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
var res1 = temp4(1, 5);
// console.log("Result is "+res1);
//Optional parameter Function
function add1(a, b) {
    console.log("Value of A is " + a); //4 
    console.log("Value of B is " + b); // undefined
    console.log("Addition of A+B is " + (a + b)); //NAN
}
// add1(4);
function add2(a, b) {
    console.log("Value of A is " + a); //4 
    console.log("Value of B is " + b); // undefined
    console.log("Addition of A+B is " + (a + b)); //NAN
}
// add2();
// add2(10,2);
// add2(4,5);
//Default parameter Function
function add3(a, b) {
    if (b === void 0) { b = 9; }
    console.log("Value of A is " + a); //10
    console.log("Value of B is " + b); // 9
    console.log("Addition of A+B is " + (a + b)); //19
}
// add3(10)
// add3(10,5)
function add4(a, b) {
    if (a === void 0) { a = 7; }
    console.log("Value of A is " + a); //10
    console.log("Value of B is " + b); // 9
    console.log("Addition of A+B is " + (a + b)); //19
}
add4();
