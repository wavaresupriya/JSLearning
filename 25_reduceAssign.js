console.log(`-------------------------Step1--------------------------------`);
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
    const sumNumbers=arrayNumbers.reduce((runningTotal,element)=>{
       return runningTotal+element;
    });
    console.log(`Sum of all numbers using reduce method :${sumNumbers}`);
    console.log(`-----------------------------------------------------------`);

    let sum=0;
   for (const element of arrayNumbers) {
      sum=sum +element;
   }
   console.log(`Sum all numbers using traditional way: ${sum}`);
   console.log(`-----------------------Step2-------------------------------`);
   const multiple=arrayNumbers.filter((element)=>{
       return element%5==0;
   });
   const numberSum=multiple.reduce((runningTotal,element)=>{
     return runningTotal+element;
   });
   console.log(`sum of all numbers which are multiple of 5 : ${numberSum}`);
