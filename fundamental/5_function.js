// ฟังก์ชันแบบไม่มีการรับค่า
function wakeup(){
    alert("Hello");
}

// ฟังก์ชันแบบมีการรับค่า
function showinfo(name="no name", age="0"){
    document.write("Hello "+name+ " your age is "+ age);
}

// ฟังก์ชันที่มีการ return
function circleArea(radius){
    var area = Math.PI * Math.pow(radius,2);
    return area;
}
