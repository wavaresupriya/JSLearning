var interview= function(gradScore,hscScore,sscScore,candidateName)
{
(gradScore >=70||hscScore >=80||sscScore >=90)? console.log(`Congrates ${candidateName} You are eligible for TCS interview`) : console.log(`Unfortunately ${candidateName} You are not eligible for interview`);
    

}
interview(80,86,90,"supriya");
interview(70,65,55,"Komal");
interview(60,79,88,"Pooja");