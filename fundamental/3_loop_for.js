var a;
for (a = 1; a <= 10; a++) {
    if(a % 2 == 0){
        document.write("<font color='red'> "+ a + ". Welcome</font><br>");
    }else{
        document.write(a + ". Welcome<br>"); 
    }
}

var box;
for(var item=1; item <= 12; item++){
    if(item % 4 == 0){
        box = "<div class='last-box'>Product "+item+"</div>";
    }else{
        box = "<div class='normal-box'>Product "+item+"</div>"; 
    }
    
    document.write(box);
}