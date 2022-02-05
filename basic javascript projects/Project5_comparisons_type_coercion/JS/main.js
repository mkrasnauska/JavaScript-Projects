document.write (typeof "word");  // display a data type of a variable
document.write ("<br>");  //placing text in new line 
document.write (typeof 3);  // display a data type of a variable
document.write ("<br>");  //placing text in new line 
document.write (2E310);    // displaying infinity number
document.write ("<br>");  //placing text in new line 

document.write (-3E310);  //displaying negative infinity number
document.write ("<br>");  //placing text in new line

document.write (325>157);  // boolean logic true statement
document.write ("<br>");  //placing text in new line

document.write (17>21);  //boolean logic false statement
console.log (367+123);  // console log math operation
document.write ("<br>");  //placing text in new line

document.write ("50"+7);  // coercion math operation
console.log (3>995);   // displaying boolean logic false statement in the console
document.write ("<br>");  //placing text in new line

document.write (199==199);  //diplaying of true statement with double equal signs
document.write ("<br>");  //placing text in new line

document.write (785==578);  //displaying of false statement with double equal signs
document.write ("<br>");  //placing text in new line

a=5;            // assigning a variable
b=5;        // assigning a variable
document.write (a===b); // displaying a true statement with same type of data
document.write ("<br>");  //placing text in new line

c=7;   // assigning a variable
d="five";  // assigning a variable
document.write (c===d); // displaying a false statement with different value and data type
document.write ("<br>");  //placing text in new line

e=16;  // assigning a variable
f="16"; //assigning a variable
document.write (e===f); // displaying a false statement with same value but different data type
document.write ("<br>");  //placing text in new line

g="orange";  //assigning a variable
h="apple";   //assigning a variable
document.write (g===h); // displaying a false statement with same data type but different value
document.write ("<br>");  //placing text in new line
document.write ("<br>");  //placing text in new line

document.write (7>1 && 23>16);  // using AND operator displaying true statement
document.write ("<br>");  //placing text in new line
document.write (341>5674 && 9>8);  // using AND operator displaying false statement
document.write ("<br>");  //placing text in new line

document.write (1>3 || 9>5);  // using OR operator displaying true statement
document.write ("<br>");  //placing text in new line
document.write (13>15 || 14>15);  //using OR operator displaying false statement
document.write ("<br>");  //placing text in new line
document.write ("<br>");  //placing text in new line

function not_function () {    // defining function
    document.getElementById("not").innerHTML=! (36<19);  // using NOT operator displaying true statement
}

document.write ("<br>");  //placing text in new line
function nf_function () {   //defining function
    document.getElementById("NF").innerHTML=! (28>10);  // using NOT operator displaying false statement
}


