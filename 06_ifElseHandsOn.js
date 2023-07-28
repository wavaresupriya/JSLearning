function controlFlow(num){
if(num%2==0){
    console.log(`The number ${num} is Even`);
}else 
{
console.log(`The number ${num} is Odd`);
}

}controlFlow(45);
controlFlow(70);
controlFlow(67);
controlFlow(98);
console.log(`-----------------------------------------------`);
function control(){
    var jsLength ="Javascript-ES6";
    var word=jsLength.length;
    if(word>=10){
        console.log(`The word ${jsLength} contains more than 10 character`);
    }else 
    {
    console.log(`The word ${jsLength} contains less than 10 character`);
    }
    
}control();

console.log(`-----------------------------------------------`);
function flow(){
var javaString="Javascript Language";
var result=javaString.includes('Java');

if(result){
  console.log(`String ${javaString} is start with java`);
}else 
{
console.log(`String ${javaString} is not start with java`);
}
}
flow();

