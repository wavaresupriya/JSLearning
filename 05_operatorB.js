console.log(`-----------------------------------------`);
var greaterNumber=function(num1,num2){
var result=num1 > num2 ? num1 : num2;
console.log(`The Greater Number between 10 & -10 is : ${result}`);
}
greaterNumber(10,-10);

var greaterNumber=function(num1,num2){
    var result=num1 > num2 ? num1 : num2;
    console.log(`The Greater Number between 800 & 899 is : ${result}`);
    }
    greaterNumber(800,899);
console.log(`-----------------------------------------`);
var isEvenOrOddNum= function(num)
{
var result= 29 % 2==0? "Even" : "Odd" ;
console.log(`The Given Number 29 is : ${result} `);

var result= 44 % 2==0? "Even" : "Odd" ;
console.log(`The Given Number 44 is : ${result} `);

var result= 0 % 2==0? "Even" : "Odd" ;
console.log(`The Given Number 0 is  : ${result} `);

var result= 101 % 2==0? "Even" : "Odd" ;
console.log(`The Given Number 101 is : ${result} `);
}
isEvenOrOddNum();

console.log(`---------------------------------------`);
var wordLength = function(word){
var length=word.length;
var result=length %2==0 ? "Even" : "Odd" ;
console.log(`Length of JavaScript is : ${result}`);
}
wordLength("JavaScript");

var wordLength = function(words){
    var length=words.length;
    var result=length %2==0 ? "Even" : "Odd" ;
    console.log(`Length of developer is : ${result}`);
    }
    wordLength("developer");

    var wordLength = function(value){
        var length=value.length;
        var result=length ? "Even" : "Odd" ;
        console.log(`Length of Google is : ${result}`);
        }
        wordLength("Google");
