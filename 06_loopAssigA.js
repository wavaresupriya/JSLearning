function vowelCount(str){
    let count = 0;
    let index = 0;
    while( index < str.length) {
       
        let char = str.charAt(index);
        index++;
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer");

console.log(`-----------------------------------------------`);

let sumOfCube= function(){
    let sumCube = 0;
    for(let index=1; index <=5; index++){
        indexValue=index*index*index;
  sumCube = sumCube +indexValue;
}
console.log(`Sum of first 5 cube is: ${sumCube}`);
}
sumOfCube();
console.log(`-------------------------------------------------`);

function oddPositionedChars(str){
for (let index = 0; index < str.length; index++) {
    const char=str.charAt(index);
    if(index%2 !=0 && char!=' '){
        console.log(` ${char}`);
    }
    
}

}
oddPositionedChars('Hard work always pays back');

console.log(`---------------------------------------------------`);
function oddPositionedChars(str){
    for (let index = 0; index < str.length; index++) {
        const char=str.charAt(index);
        if(index%2 !=0 && char!=' '){
            console.log(` ${char}`);
        } 
    }
    
 }
 oddPositionedChars('Soon i will be Angular IT Champ');