var i = 1;
// while (i <= 100) {
//     if(i % 10 == 0){
//         document.write(String(i).padStart(3,"0") +"<br>");
//     }else{
//         document.write(String(i).padStart(3,"0") +" ");
//     }
//     i++;
// }

// Infity loop
// while(i <= 10){

    setInterval(function(){
        document.write(i+"<br>"); 
        i++;
    }, 1000);

// }