var A=32;       // defining global variable
function Add_numbers_1() {  // defining a function
    document.write (123+A+"<br>");  //  function
}
function Add_numbers_2() {  // defining function
    document.write (A+68); // function
}
Add_numbers_1();  // display result 
Add_numbers_2();   // display result


document.write ("<br>");  //placing text in new line 

function Add_numbers_3() {  // defining function
    var B=7;                //  defining local variable
    document.write (123+B+"<br>"); // function
}
function Add_numbers_4() {  // defining function
    document.write (B+68);  // function
}
Add_numbers_3();   // display result
Add_numbers_4();    // display result


document.write ("<br>");  // placing text in new line

function get_Date() {  // defining a function
    if (new Date().getHours()>12) {   // establishing an "If" conditional statement
        document.getElementById("afternoon").innerHTML="What are we having for lunch?";  // display this result
    }

}


document.write ("<br>");  // placing text in new line

function Trip_function() {   // defining function
    Miles=document.getElementById("Miles").value; // pull entered information 
    if (Miles>=60) {  // establishing an "if" condition
        Trip="You will reach your destination by 5pm.";  // display result should "If" = true
    }
    else {  // establishing an "else" condition
        Trip="This journey is taking a while..";  // display result should "else" = true
    }
    document.getElementById("Miles_in_hour?").innerHTML=Trip;  //  display based on entered data
}


document.write ("<br>");  // placing text in new line
function Time_function() {  //defining function 
    var Time=new Date().getHours(); // defining variable
    var Reply;  // defining variable
    if (Time<12==Time>0) {   // establishing an "if" condition
        Reply="It is morning time!";   // result should "if" =true
    }
    else if (Time>12==Time<18) {  // establishing "elseif" condition
        Reply="It is afternoon.";  // result should "elseif" =true
    }
    else {    
        Reply="It is evening time";   // result should "if" and "elseif"=false
    }
    document.getElementById("Time_of_day").innerHTML=Reply;  // display based on aquired data
}
