
var square=function(num1,num2){
var result=num1*num2;
console.log(`Square of : ${result}`);
}
square(5,5);
square(6,6);
square(25,25);
square(100,100);
square(67.89,67.89);
square(59,59);
console.log("--------------------------");
console.log('Type of function is:' ,typeof square);
console.log("--------------------------");
 var rectangle=function(length,width) 
{
var areaOfRectangular=length*width;
console.log(`Area of rectangle: ${areaOfRectangular}`);
}
var length=499;
var width=917;
rectangle(length,width);
console.log('----------------------------');
var swapValues=function(value1,value2){
console.log(`Before Swap value1= ${value1}  value2=${value2}`);
var temp=value1;
value1=value2;
value2=temp;
console.log(`After Swap value1= ${value1}  value2=${value2}`);
}
swapValues('Mahi','Raina');
swapValues(55,77);
console.log('----------------------------');
var strOperation=function(str){
var strLength=str.length;
console.log(`Total Character in string: ${strLength}`);

var charAt7 = str.charAt(7);
console.log(`${str} - Char at 7th index is: ${charAt7}`);

var charAt12 = str.charAt(12);
console.log(`${str} - Char at 12th index is: ${charAt12}`);

var charAtLastIndex = str.charAt(strLength-1);
console.log(`Last Char is ${charAtLastIndex} of Index is ${strLength}`);

var charAt0 = str.charAt(0);
console.log(`${str} - Char at 0th index is: ${charAt0}`);

var charAtThirdLastIndex = str.charAt(strLength-3);
console.log(`Third Last Char is ${charAtThirdLastIndex} of Index is ${strLength}`);

var word=str.split(' ');
var count=word.length;
console.log(`Total Number Of Words : ${count}`);
var result=count*count;
console.log(`Number Of Word Square :${result}`);

}
strOperation('JS the most popular language of internet');
