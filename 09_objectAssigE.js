let sbiBank = {
 
    bankName :"SBI Bank",
location :"Pune",
accountNo :"4524663525",
interestRate:"6.75%",
showDetails:function(){
    console.log(`${this.bankName},${this.location},${this.accountNo},${this.interestRate}`);
}
}

let axisBank = {
bankName :"Axis Bank",
location : "Mumbai",
accountNo :"425465563",
interestRate:"6.60%",
showDetails:function(){
    console.log(`${this.bankName},${this.location},${this.accountNo},${this.interestRate}`);
}
}
    let hdfcBank = {
        
bankName :"HDFC Bank",
location: "pune",
accountNo :"4585322546",
interestRate:"8.00%",
showDetails:function(){
   console.log(`${this.bankName},${this.location},${this.accountNo},${this.interestRate}`); 
}
        
    }
    let yesBank = {
       
        bankName :"YES Bank",
        location :"Mumbai",
        accountNo: "4255615466",
        interestRate: "6.00%",
        showDetails:function(){
    console.log(`${this.bankName},${this.location},${this.accountNo},${this.interestRate}`);
    }
        }
        sbiBank.showDetails();
        axisBank.showDetails();
        hdfcBank.showDetails();
        yesBank.showDetails();
    
