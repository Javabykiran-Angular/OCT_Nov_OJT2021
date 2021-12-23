
//push & pop Method 
// LIFO=> Last In First Out

let a:number[]=[];

// a.push(22);
// console.log(a);
// a.push(33,55,7,48);
// console.log(a);
// let temp=a.pop();
// console.log(a);
// console.log("Poped value is "+temp);

// let a1=[45,78,56,23,11,14,27,29,48];

// a1.splice(2,0,100); //add a data
// console.log(a1);
// a1.splice(5,1); //delete a data
// console.log(a1);
// a1.splice(2,3); //multiple data delete
// console.log(a1);
// a1.splice(3,1,10); //replace the data
// console.log(a1);


//map Function
// to perform element by element operation

let a2=[2,3,4,5];

let res=a2.map((myvalue,i)=>{
    return (myvalue*myvalue)
})

console.log(a2);
console.log(res);
