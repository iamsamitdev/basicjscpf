// Basic Array
var first_name = ['John','Joe','Jack','Jane'];

// แสดงผลสมาชิกของ Array
document.write(first_name[0]+"<br>"+first_name[3]+"<br>");
document.write(first_name[4]+"<br>");

// เปลี่ยนสมาชิกของ Array
first_name[0] = "Jany";
document.write(first_name[0]+"<br>");

// เพิ่มสมาชิกใหม่
first_name[4] = "Joey";
document.write(first_name[4]);

document.write("<br>------------------------<br>");

// การวนลูปอ่านสมาชิกของ Array
for(var i=0; i < first_name.length; i++){
    document.write(first_name[i]+"<br>");
}

document.write("<br>------------------------<br>");

// ฟังก์ชันการวนลูปด้วย forEach
first_name.forEach(dataFirstname);

function dataFirstname(value){
    document.write(value+"<br>");
}

