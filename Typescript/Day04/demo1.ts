var a:number=10;
// console.log('Value of a is '+a);

var a1:number;
// console.log("Default value of a1 is "+a1);

var str:string='Sumit';
// console.log(`str value is ${str}`);
var str1:any;
str1=2.5;
// console.log(`str1 value is ${str1}`);
str1='Raokhande';
// console.log(`str1 value is ${str1}`);
str1=true;
// console.log(`str1 value is ${str1}`);


//Type Assertion
var a2:any;

// 2 way to perform Type assertion
//1 using Angle Bracket
//2 using as syntax

//1 using Angle Braket

var temp=(<string> a2);
// temp.

//2 using as syntax

var temp2=(a2 as string);
// temp2.

//Operator
// Airthematic => +,-,*,/,%
//Logical => &&, ||,!
//Ternary=> condition?expression1:expression2;
//Bitwise => &,|,~,!,^,>>,<<
//Unary => pre/post inc/dec ++,--
//relational=> <=,>=, !=, ==, === (Strongly equal / Strongly equality)
// it means both data type as well as value should be same 
// a="20",b=20
//assignment => =,+=,-=,%=,/=

var temp3=21<4?'Hi':'bye';
// console.log("Value is "+temp3);

//Control Statement
// if-else,if-elseif-else,switch
// break,continue,if
// if(21<4){
//     console.log("Condition is true");
// }else{
//     console.log("Condition is false");
// }

// var choice:number=21;
//     switch(choice){

//         case 1:console.log('U R in case 1');
//                 break;
//         case 2:console.log('U R in case 2');
//                 break;
//         default:console.log('U R in default case ');
//     }

//looping
//do-while,while,for,foreach
var count=4;

// while(count!=0){
//     console.log("Count Value is "+count);
//     count--;
// }
// do{
//     console.log("Count Value is "+count);
//     count--;
// }while(count!=0)

//for
// for(var i=0;i<4;i++){
//     console.log("Value of i is "+i);
// }

// console.log("After the loop value of i is "+i);

//var has global scope 

//let is used to define a variable 
// but let has scope=> nearest wthin that block {}

for(let i=0;i<4;i++){
    console.log("Value of i is "+i);
}

// console.log("After the loop value of i is "+i);
//const => constant 

const pi=3.14;

//const has global scope as well as within that block
