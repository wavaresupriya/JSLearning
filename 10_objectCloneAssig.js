let personalDetails = {
  fullName: "Supriya Wavare",
  age: 29,
  city: "Mumbai",
};
let collegeDetails = {
  collegeName: "CKT College",
  grade: "A+",
  city: "Panvel",
};
let margeObject = Object.assign({} , personalDetails,collegeDetails);
console.log(margeObject);
console.log(`-----------------------------------------------------`);
const array = ["snehal","jyoti","shruti","priyanka"];
Object.freeze(array);
console.log(array);
console.log(`-----------------------------------------------------`);
for (const element of array) {
    console.log(element);
}
console.log(`-----------------------------------------------------`);
let company="Codemind Technology";
let reverse="";
let substringWord = company.substring(0,8);
for(index=company.length-1;index>=9;index--){
    let char=company.charAt(index);
    if(char!=' ')
    
        reverse= reverse.concat(char);

    }
    let result = substringWord.concat(" ")+reverse;
console.log(result);


