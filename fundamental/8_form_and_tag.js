// สร้างฟังก์อ่านข้อมูลจากฟอร์ม
function getData(){
    var firstname = document.userform.firstname.value;
    document.getElementById("resultarea").innerHTML = firstname;
}