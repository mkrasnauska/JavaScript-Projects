function Call_Loop() {  // defining function    
    var Num="";    // defining a variable
    var Y = 2;    //  defining a variable
    while (Y < 15) {
        Num += "<br>" + Y;  // defining condition for the loop
        Y ++ ;
    }
    document.getElementById("Loop").innerHTML=Num;  //  display result
}


var groceries = ["Milk","Eggs","Apples","Cheese","Chicken breast","Brocolli","Paper towel","Soap"];  // defining items for "for loop"
var content="";  // defining a variable
var X;  // defining a variable

function for_loop() {  // defining function
    for (X = 0; X < groceries.length; X ++) {    // setting condition for "for loop"
        content += groceries [X] + "<br>";
    }
    document.getElementById("Groceries_to_buy").innerHTML=content;

}


function array_function() {   // defining function
    var season = []      //  defining variables for array
    season [0] = "snowflakes";
    season [1] = "green grass";
    season [2] = "sunshine";
    season [3] = "colorful leaves";
    document.getElementById("Array").innerHTML="Which season is known for " + season[2] + "?";   // display result
}


function constant_function() {   // defining function
    const car= {make:"BMW",series:"series 3",color:"white"};  // setting const values
    car.color="sea-green";    // change of value property
    car.body_style="sedan";   // defining value
    document.getElementById("Constant").innerHTML=" One of my favourite cars are "  + car.make  +  car.series + " with a body style " + car.body_style + ".";  // display result
}



var Z=77;       // defining variable
document.write(Z);   //  display variable
{
    let Z=15;    // defining "let" value
    document.write("<br>" + Z);  // display "let" value
}
document.write("<br>" + Z);   // display "var" value 


document.write ("<br>");  //placing text in new line 

document.write ("<br>");  //placing text in new line 


let pizza = {    // defining "let" keyword
    crust : "thin crust,",    // defining objects properties
    base : "tomato base,",   // defining objects properties
    meat : "ground beef,",   // defining objects properties
    veg : "onions and peppers",   // defining objects properties
    cheese : " mixed cheese",      // defining objects properties
    description : function() {
   return "Lets make a pizza with " +" "+ this.crust +" "+ this.base +" "+ this.meat +" "+ this.veg + " "+this.cheese+"."  ;  // description function method
    }
};
document.getElementById("Pizza_prep").innerHTML=pizza.description();   // display



