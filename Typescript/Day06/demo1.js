// array is growable & shrinkable dynamically
var a1 = [2, 3, 4, 5];
var a2 = [7, 8, 9, 4, 5];
var a3 = [];
var a4 = [2.5, 'sumit', true, 9];
// for(let i=0;i<a1.length;i++){
//     console.log("Value of array is "+a1[i]);
// }
// console.log("Array values is "+a1);
// console.log("Array is "+a1.join(" # "))
// console.log("Array is "+a1.join("  "))
//Rest Parameter Function
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    for (var j = 0; j < item.length; j++) {
        console.log("Item is " + item[j]);
    }
}
// display(22,33);
// display(45,4,8,9,7,22);
// display(8);
//for each
// a2.forEach((myvalue,i)=>{
//     console.log(`
//         myvalue is ${myvalue} and Index is ${i}
//     `)
// })
//Array destructor
var arrstr = ['Angular 8', 'React Js', 'Vue Js', 'Embber Js'];
// console.log(arrstr[1]);
// let t1=arrstr[1];
// console.log(t1);
var t1 = arrstr[0], t2 = arrstr[1], t3 = arrstr[2], t4 = arrstr[3];
// console.log("t1=>"+t1);
// console.log("t2=>"+t2)
// console.log("t3=>"+t3)
// console.log("t4=>"+t4)
var arr1 = arrstr[0], arr2 = arrstr[3];
//   console.log("Arr1=> "+arr1);
//   console.log("Arr2=> "+arr2);
var b1 = arrstr[0];
// console.log("b1==== "+b1);
var b2 = arrstr.slice(1);
// console.log(b2);
// let b3=arrstr.slice(0,4);
// console.log(b3);
var b4 = arrstr.slice(0, 3);
console.log(b4);
