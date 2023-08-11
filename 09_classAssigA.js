class Vehicle {
constructor(vehicleName,price,color,seatingCapacity,fuelType){
this.vehicleName= vehicleName;
this.price= price;
this.color= color;
this.seatingCapacity=seatingCapacity;
this.fuelType=fuelType;
}

}
let vehicalBMW= new Vehicle("BMW","50Lakh","blue",5,"Petrol");

let vehicalAudi= new Vehicle("Audi","1Cr","light pink",5,"Petrol");

let vehicalOmni= new Vehicle("Omni","2Lakh","violet",8,"Petrol");

let vehicalMarutiInvicto= new Vehicle("Maruti Invicto","29Lakh","Nexa Blue",5,"Hybrid");

let vehicalTataIndica= new Vehicle("Tata Indica","4Lakh","Jet Silver",5,"CNG & Diesel");

const array= [vehicalBMW,vehicalAudi,vehicalOmni,vehicalMarutiInvicto,vehicalTataIndica];
for (const Vehicle of array) {
    console.log(`Vehical Details is: Vehicle Name: ${Vehicle.vehicleName}, Price: ${Vehicle.price}, color: ${Vehicle.color}, seatingCapacity: ${Vehicle.seatingCapacity}, Fuel Type: ${Vehicle.fuelType}`);

}
console.log(`------------------------------------------------------------------------------------------`);
class College{
    constructor(collegeName,location,collegeGrade,chairman,principal){
        this.collegeName = collegeName;
        this.location = location;
        this.collegeGrade = collegeGrade  ;
        this.chairman = chairman;
        this.principal = principal; 

    }
    display( ){
        console.log(`College Details is: collegeName:${this.collegeName},location:${this.location},collegeGrade:${this.collegeGrade},chairman:${this.chairman},principal:${this.chairman}`);
    
    }

}
let collegeCKT= new College("CKT", "Panvel", "A+", "Ramsheth Thakur", "Sanjay k Patil");
collegeCKT.display();

let collegeMRSV= new College("Maloji Raje Sheti","Phaltan","A+","Sanjivraje Nimbalkar","Arvind Ranvare");
collegeMRSV.display();

let collegePD= new College("Pandurang Desai", "Kharad", "A+", "Bando Kadam","Batu Kambale");
collegePD.display();

let collegeDME= new College("Dattakala Management of Engineering","Daund","A+","Randas Zol", "Sachin Lawate");
collegeDME.display();

console.log(`-------------------------Traverse Array---------------------------`);
function traverseObject(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`Key: ${key}, value : ${element}`); 
        }
    }
}
traverseObject(collegeCKT);
console.log(`-------------------------------------------------------------------`);
traverseObject(collegeMRSV);
console.log(`-------------------------------------------------------------------`);
traverseObject(collegePD);
console.log(`-------------------------------------------------------------------`);
traverseObject(collegeDME);