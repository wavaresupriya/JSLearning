var leapYear=function(year)
{
    if(isNaN(year)) 
        {
       console.log(`${year} ,is a Invalid Input`);
       }
       else if(year%4!=0)
       {
        console.log(`${year} ,is a Not a leap year`);
       }
else if(year%4==0)
{
    console.log(`${year} ,is a Leap year`);
}
}

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);