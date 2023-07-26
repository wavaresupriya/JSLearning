function squareOfWordLength(script){
var stringLength=script.length;
var square=stringLength*stringLength;
return square;
}
var result=squareOfWordLength("JavaScript");
console.log(`Square of the string JavaScript is : ${result}`);

function squareOfWordLength(scripts){
    var stringLength=scripts.length;
    var square=stringLength*stringLength;
    return square;
    }
    var result=squareOfWordLength("Google Chrome");
    console.log(`Square of the string Google Chrome is : ${result}`);

function squareOfWordLength(script){
    var stringLength=script.length;
    var square=stringLength*stringLength;
    return square;
    }
    var result=squareOfWordLength("Developer Smart");
    console.log(`Square of the string Developer Smart is : ${result}`);
console.log(`--------------------------------------------------------------------------`);
var angular=function (words){
var stringLength=words.length;
var numberOfWord=words.split(' ');
var wordCount=numberOfWord.length;
var result=stringLength/ wordCount;
console.log(`Length of String is : ${stringLength} and  Divide in Total number of words : ${result}`);
var multiplay=stringLength*wordCount;
console.log(`Length of String is : ${stringLength} and  Multiplication of Total number of words : ${multiplay}`);
}
angular("I am Angular Developer");



