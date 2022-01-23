function addition_function () {  // defining function
    var addition=8+72;     // defining addition variable
    document.getElementById("Math").innerHTML="8+72="+addition;  // Putting value into HTML element 
}

function sub_function () {   // defining function
    var subtraction=55-34;   // defining variable
    document.getElementById("Sub").innerHTML="55-34="+subtraction;    // Putting value into HTML element 
}

function m_function () {    // defining function
    var multiplication=6*5;  // defining variable
    document.getElementById("multi").innerHTML="6*5="+multiplication;   // Putting value into HTML element 
}

function dev_function () {   // defining function
    var simple_Math=81/9;    // defining variable
    document.getElementById("dev").innerHTML="81/9="+simple_Math;    // Putting value into HTML element 
}

function a_function () {   // defining function
    var a_math=(3+5)*8/4-3;  // defining variable
    document.getElementById("aio").innerHTML="3 pluse 5,multiplied by 8,divided in four then subtracted by 3 equals" +a_math;  // Putting value into HTML element 
}

function mod_function ()  {   // defining function
    var m_math=37%5;          // defining variable
    document.getElementById("mod").innerHTML="when you divide 37 by 5 you have a remainder of : " + m_math;
    // Putting value into HTML element 
}


function n_function ()  {    // defining function
    var y=7;                  // defining variable
    document.getElementById("neg").innerHTML= -y;  // Putting value into HTML element 
}


var a=24.8;     // defining variable
a++;            //defining increment
document.write(a);   // display variable requested

document.write ("<br>");   //placing text in new line 

var b=17;    // defining variable
b--;            //defining decrement
document.write(b);   // display variable requested

document.write ("<br>");   //placing text in new line 

window.alert (Math.random ()*150);   //creating window alert
document.write ("<br>");   //placing text in new line 

function display()   // defining function
{  
  var x=document.getElementById("num").value;    // defining variable 
document.getElementById("result").innerHTML=Math.round(x);  // Putting value into HTML element in a shape of form
}  
