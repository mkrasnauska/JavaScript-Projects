function spring_function () {   //defining function and naming it
    var str= "Spring will be here soon";    //defining a variable and giving a string value
    var result= str.fontcolor ("green");   //fontcolor on string variable
    document.getElementById ("green_text").innerHTML= result;   // Putting value into HTML element 
}

function myFunction() {    //defining function and naming it
    var sentence="Tomorrow is my brothers birthday ";  //defining a variable sentence
    sentence +=" and i will make him pizza and a cake!"; //concatenating a variable
    document.getElementById("concatenate").innerHTML=sentence;  // Putting value into HTML element 
}