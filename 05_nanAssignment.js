console.log(`-------------------Implicit conversion to String------------------------`);

var result = '3' + 2;
console.log(result);
console.log(`Result is 32 because 2 is implicitly converted into string and perform concatination`);

var result= '3' + true;
console.log(result);
console.log(`Result is 3true because true is implicitly converted into string and perform concatination`);

var result= '3' + undefined;
console.log(result);
console.log(`Result is 3undefined because undefined is implicitly converted into string and perform concatination`);

var result= '3' + null;
console.log(result);
console.log(`Result is 3null because null is implicitly converted into string and perform concatination`);

console.log(`------------------Implicit boolean conversion to number------------------------`);
var result= '4'-true;
console.log(result);
console.log(`Result is 3 because of '4' is converted into number and true value is 1 then 4-1=3`);

var result= 4 + true;
console.log(result);
console.log(`Result is 5 because of 4 is number and true value is 1 then 4+1=5`);

var result= 4 + false;
console.log(result);
console.log(`Result is 4 because of 4 is number and false value is 0 then 4+0=4`);

console.log(`-----------------Implicit string conversion to Number--------------------`);

var result= '4' - '2';
console.log(result);
console.log(`Result is 2 because of '4' & '2' is converted into  number then 4-2=2`);

var result= '4' - 2;
console.log(result);
console.log(`Result is 2 because of '4' is converted into number then 4-2=2`);

var result= '4' * 2;
console.log(result);
console.log(`Result is 8 because of '4' is converted into number then 4*2=8`);

var result= '4' /2;
console.log(result);
console.log(`Result is 2 because of '4' is converted into number then 4/2=2`);

console.log(`-----------------------------------------------------------------`);
console.log(0==' ');
console.log(`Result is true because Space is converted into number`);

console.log(0=='0');
console.log(`Result is true because '0' is converted into number`);

console.log(0==false);
console.log(`Result is true because  false is converted into number`);

console.log(null==undefined);
console.log(`Result is true because loosely equal as both having different type`);

console.log(1==[1]);
console.log(`Result is true because both are same type that is number`);

console.log(1==true);
console.log(`Result is true because true is converted into number`);

console.log(1=='1');
console.log(`Result is true because '1' is string implicitly converted into number`);








