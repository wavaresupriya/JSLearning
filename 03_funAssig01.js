console.log("===============step1=================");
function show( )
{
console.log("Function with no argument and no return ");
}
show( );
function add( )
{
    console.log("JS Learning");
}
add( );
console.log("===============step2==================");

function personalDetails(firstName ,lastName ,collegeName)
{   
    console.log("First Name :" ,firstName);
    
    console.log("Last Name : " ,lastName);
   
    console.log("College Name :" ,collegeName);
}
var firstName="Supriya";
var lastName ="Wavare";
var collegeName = "CKT ,college";
personalDetails(firstName ,lastName ,collegeName);
console.log("==============step3===============");
function swapValues( value1,value2) {
 console.log("Before Swapping :  value1 :",value1 ,"  value2 :",value2); 
 var temp=value1;
 value1=value2; 
 value2=temp; 
 console.log("After Swapping  :  value1 :",value1,"    value2 :",value2);
}
var value1="Virat";
var value2="Anushaka";
swapValues( value1,value2);

var num1=1000;
var num2=2000;
swapValues(num1, num2); //Function call or invocation
console.log("================step4==================");
function addition(arg1, arg2, arg3){
    console.log('Values are: ', arg1, arg2, arg3);
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition(10.23,600,40);
console.log('Addition is:', res);
function addition(arg1, arg2, arg3){
    var result = arg1 + arg2 + arg3;
    return result;
}
var res = addition("Hello","Good","Morning");
console.log('Addition is:', res);
console.log("======================================");
function bankDetails(bankName,accountNum,location,pinCode)
{
    console.log('Bank Name:',bankName , ' Account Number:',accountNum, ' pin Code:',pinCode);
}
var bankName="CITI Bank";
var accountNum=3456782345;
var location="pune";
var pinCode=431202;
bankDetails(bankName,accountNum,location,pinCode);

var bankName="Axis Bank";
var accountNum=7856782345;
var location="Mumbai";
var pinCode=441202;
bankDetails(bankName,accountNum,location,pinCode);

var bankName="HDFC Bank";
var accountNum=8956782345;
var location="pune";
var pinCode=631202;
var value="Open";
bankDetails(bankName,accountNum,location,pinCode);





