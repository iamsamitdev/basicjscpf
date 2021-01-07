// ฟังก์ชันดึงวันที่ออกมา
var day = new Date();
// console.log(day.getDay());

// ฟังก์ชัน random
var num = Math.floor(Math.random() * 6);
console.log(num);

switch (num) {
    case 0:
        document.write("Sunday");
        document.body.style.backgroundColor = "red";
        document.body.style.color = "#fff";
        break;
    case 1:
        document.write("Monday");
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "#fff";
        break;
    case 2:
        document.write("Tueday");
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "#fff";
        break;
    case 3:
        document.write("Wedsday");
        document.body.style.backgroundColor = "green";
        document.body.style.color = "#fff";
        break;
    case 4:
        document.write("Thursday");
        document.body.style.backgroundColor = "orange";
        document.body.style.color = "#fff";
        break;
    case 5:
        document.write("Friday");
        document.body.style.backgroundColor = "deepskyblue";
        document.body.style.color = "#fff";
        break;
    case 6:
        document.write("Saturday");
        document.body.style.backgroundColor = "violet";
        document.body.style.color = "#fff";
        break;
    default:
        document.write("Invalid day");
        break;
}