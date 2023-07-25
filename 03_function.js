function swap(n1,n2) //n1, n2 arguments or parameters n1=100  n2=1=200
{
    console.log("Inside swap function");
    console.log("Before Swap=> n1" ,n1,"n2" ,n2);
    var temp = n1;
    n1=n2;
    n2=temp;
    console.log("After Swap=> n1" ,n1,"n2" ,n2);
}
var num1=100;
var num2=200;
swap(num1, num2); //Function call or invocation

var sweety="Sweety";
var cutie="Cutie";
swap(sweety,cutie)

var num1="virat";
var num2="anushka";
swap(num1,num2)
console.log("End of program");



