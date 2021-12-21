
//anonymous function

    let temp1=function (){
        console.log("First type of anonymous function is called");
    }

    // temp1();

      let temp2= function (a:number,b:number):number{
            return (a+b);
        }

        let res=temp2(4,6);

        // console.log(`Addition is ${res}`);

        // Fat Arrow Function/Arrow Function

         let temp3= ()=>{
                console.log("fat arrow function is called...");
            }

        // temp3();

        let temp4=(a:number,b:number):number=>{
            return (a+b);
        }

        let res1=temp4(1,5);
        // console.log("Result is "+res1);


        //Optional parameter Function

        function add1(a:number,b?:number){
            console.log("Value of A is "+a);//4 
            console.log("Value of B is "+b);// undefined
            console.log("Addition of A+B is "+(a+b));//NAN
        }

        // add1(4);

        function add2(a?:number,b?:number){
            console.log("Value of A is "+a);//4 
            console.log("Value of B is "+b);// undefined
            console.log("Addition of A+B is "+(a+b));//NAN
        }

        // add2();
        // add2(10,2);
        // add2(4,5);

        //Default parameter Function

        function add3(a:number,b:number=9){
            console.log("Value of A is "+a);//10
            console.log("Value of B is "+b);// 9
            console.log("Addition of A+B is "+(a+b));//19
        }

        // add3(10)
        // add3(10,5)

        function add4(a:number=7,b?:number){
            console.log("Value of A is "+a);//10
            console.log("Value of B is "+b);// 9
            console.log("Addition of A+B is "+(a+b));//19
        }

        add4();