
function text() {    // defining a function
    var p_1="It is 9am, ";  // defining a variable
    var p_2="and i am thinking ";  // defining a variable
    var p_3="what i want for ";    //defining a variable
    var p_4="my breakfast. ";        //defining a variable
    var my_sentence=p_1.concat(p_2,p_3,p_4);  // defining a variable to be concatenated
    document.getElementById("connect").innerHTML=my_sentence;   // display result
}

document.write ("<br>");  //placing text in new line
document.write ("<br>");  //placing text in new line 

function S_Method() {   // defining a function
    var Sentence="I cant wait for the sunshine.";  // defining a variable
    var Section=Sentence.slice (20,33);            // defining a variable
    document.getElementById("text").innerHTML=Section;  //display result
}

document.write ("<br>");  //placing text in new line
document.write ("<br>");  //placing text in new line

function num_method() {   // defining a function
var X=14;     // defining a variable
document.getElementById("Numbers").innerHTML=X.toString();  // display result
}

document.write ("<br>");  //placing text in new line
document.write ("<br>");  //placing text in new line

function p_method()  {    // defining a function
    var Z=17.356908007;    // defining a variable 
    document.getElementById("Precision").innerHTML=Z.toPrecision(10);
}