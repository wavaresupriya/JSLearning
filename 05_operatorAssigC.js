var interview= function(gradScore,hscScore,sscScore,candidateName)
{
var result=gradScore >=70||hscScore >=80||sscScore >=90? `Congrates ${candidateName} You are eligible for TCS interview`:`Unfortunately ${candidateName} You are not eligible for interview`;
  console.log(result);  

}
interview(80,86,90,"supriya");
interview(70,65,55,"Komal");
interview(60,79,88,"Pooja");