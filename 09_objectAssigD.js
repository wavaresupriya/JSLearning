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
       return`Teacher Degree: ${this.engineering}, ${this.PHD}, ${this.MA}`;
        }

    },
    certificate: ["Hacker Rank Participation","Certificate in IEF course","Certificate in Adv Programming"],
}
professor.degrees.getDegrees();

professor.totalExperience="14 years";
console.log(professor);
professor.degrees.BEd = "English";
console.log(professor);
professor.emailId="sonaliAware@gmail.com";
console.log(professor);
console.log(`Before in array: ${professor.certificate}`);
professor.certificate.push("Oracle Certified");
console.log(`After in array: ${professor.certificate}`);
console.log(professor);