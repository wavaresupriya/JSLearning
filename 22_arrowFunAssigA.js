console.log(`-----------------Step1---------------------------`);
let arrowFun = ()=>{
    console.log(`Good Morning,Today is Tuesday`);
 }
 arrowFun();
 console.log(`-----------------Step2--------------------------`);
 let arrowFunWithArg = (num1,num2,num3=1)=>{
 let result=num1*num2*num3;
 console.log(`multiplication is : ${result}`);
 }
 arrowFunWithArg(5,5,2);
 arrowFunWithArg(10,4);
 console.log(`-----------------Step3--------------------------`);

function add(value1,value2,value3,value4,value5){
let addition = value1 + value2 + value3 + value4 + value5;
return addition;

}
let addResult=add(100,100,200,349,756);
console.log(`Addition of 100,100,200,349,756 numbers is: ${addResult}`);

let addOfString=add('I am', 'learning', 'ES6', 'features', 'in depth');
console.log(`Addition of String is: ${addOfString}`);