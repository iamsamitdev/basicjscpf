// การสร้างข้อมูลแบบ Object ใน JavaScript
var person = {
    firstName: "Samit",
    lastName: "Koyom",
    age: 38,
    gender: "Male",
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}

// Object Nested มีการซ้อนกันมากกว่า 1 ชั้น
var user = [
    {
        id: "1",
        email: "john@gmail.com",
        personInfo:{
            name: "John",
            address: {
                line1: "20/10 Piboonsongkram Rd.",
                line2: "Bangsue District",
                city: "Bangkok",
                zipcode: "10300"
            }
        }
    },
    {
        id: "2",
        email: "jany@gmail.com",
        personInfo:{
            name: "Jany",
            address: {
                line1: "30/11 Ladprao Wanghin Rd.",
                line2: "Ladprao District",
                city: "Bangkok",
                zipcode: "10210"
            }
        }
    },
];

// การเรียกหรือการเข้าถึงสมาชิกใน Object
document.write(person.firstName+"<br>"+person.lastName+"<br>");
document.write(person.fullName());

document.write("<br>------------------------<br>");
// document.write(user[0].personInfo+"<br>");
// document.write(user[0].personInfo.address+"<br>");

for(var i = 0; i <= user.length; i++){
    document.write(user[i].id+"<br>");
    document.write(user[i].email+"<br>");
    document.write(user[i].personInfo.name+"<br>");
    document.write(user[i].personInfo.address.line1+"<br>");
    document.write(user[i].personInfo.address.line2+"<br>");
    document.write(user[i].personInfo.address.city+"<br>");
    document.write(user[i].personInfo.address.zipcode+"<br>");
    document.write("-----------------------------<br>");
}
