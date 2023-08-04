let professor={
    Name: "Sonali Aware",
    Designation: "Assistant professor",
    Qualification: "M.A., B.Ed.,SET",
    emailId: "sonali@gmail.com",
    addharNo: "452156622221",
    degrees: {
        engineering: `CCC`,
        PHD: `Adv Computing`,
        MA: "Mathematics",
        getDegrees: function(){
       console.log(`Teacher Degree: ${this.engineering}, ${this.PHD}, ${this.MA}`);
        }

    },
    certificate: ["Hacker Rank Participation","Certificate in IEF course","Certificate in Adv Programming"],
}
professor.degrees.getDegrees();
professor.totalExperience="14 years";
professor.degrees.BEd = "English";
console.log(professor);
professor.emailId="sonaliAware@gmail.com";
console.log(professor);
let result=professor.certificate.push("Oracle Certificates");
console.log(result);