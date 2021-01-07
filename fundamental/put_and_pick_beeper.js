/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    while(1){
       moveAround();
    }
 }
 
 function putB(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 
 function pickB(){
    move();
    pickBeeper();
    move();
    move();
    pickBeeper();
    move();
 }
 
 function moveAround(){
    putB();
    turnLeft();
    putB();
    turnLeft();
    putB();
    turnLeft();
    putB();
    turnLeft();
    
    pickB();
    turnLeft();
    pickB();
    turnLeft();
    pickB();
    turnLeft();
    pickB();
    turnLeft();
 }