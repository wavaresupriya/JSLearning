function stringHandsOn(){
 
 var str= "    Hey you are doing good,keep it up    ";
console.log(`================step1=====================`);
console.log(`Given String is: ${str}`);
console.log(`=================step2====================`);
var lengthStr= str.length;
console.log(`Length of String is: ${lengthStr}`);
console.log('==================step3=====================');
var str= "    Hey you are doing good,keep it up    ";
var result = str.trim();
console.log(`Before Trim String length : ${str.length}, 
After Trim string is ${result} and it's length is ${result.length}`);
console.log(`=================step4======================`);
var str= "    Hey you are doing good,keep it up    ";
var strLength=str.length;
var afterTrimResult=str.trim();
var result=afterTrimResult.length;
var spaces=strLength-result;
console.log(`Before Trim String length : ${strLength},Total Number of remove spaces is: ${spaces}`);
console.log(`==============step5=================`);
var firstCharacter=afterTrimResult.charAt(0);
var lastCharacter=afterTrimResult.charAt(afterTrimResult.length-1);
console.log(`First character is:${firstCharacter} Last character is:${lastCharacter}`);
console.log(`==============step6=================`);
var words =afterTrimResult.split(' ');
var result=words.length;
console.log(`Total words available in string is:${result}`);
console.log(`===============step7=================`);
var indexResult=afterTrimResult.indexOf('good');
console.log(`Index of sub string 'good' is : ${indexResult}`);
console.log(`===============step8=================`);
result=afterTrimResult.slice(22);
console.log(`Slice start index  from 22 : ${result}`);

console.log(`===============step9=================`);
result=afterTrimResult.endsWith('up');
console.log(`string ends with word "up":${result}`);

console.log(`===============step10=================`);
result=afterTrimResult.startsWith('Hey');
console.log(`string start with word "Hey":${result}`);

}
stringHandsOn();
