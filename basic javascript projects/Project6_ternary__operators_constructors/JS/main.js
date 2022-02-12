function Ride_Function () {     // assigning function
    var Height, Can_ride;       // defining variable
    Height=document.getElementById ("Height").value;  //displaying value
    Can_ride= (Height<52)? "You are too short":"You are tall enough";   // defining variables and value
    document.getElementById ("Ride").innerHTML=Can_ride + " to ride";  // assigning  value to a variable based on a condition
}

document.write ("<br>");  //placing text in new line 

function Vehicle(Make,Model,Year,Color) {  // defining function
    this.Vehicle_Make=Make;                // defining "this" consctructor          
    this.Vehicle_Model=Model;              // defining "this" consctructor
    this.Vehicle_Year=Year;                // defining "this" consctructor
    this.Vehicle_Color=Color;              // defining "this" consctructor
}

document.write ("<br>");  //placing text in new line 
document.write ("<br>");  //placing text in new line 

var Jack=new Vehicle ("Dodge","Viper",2020,"Red");  //defining a variable with "new" constructor
var Emily=new Vehicle ("Jeep","Trail Hawk",2019,"White and Black");   //defining a variable with "new" constructor
var Erik=new Vehicle ("Ford","Pinto",1971,"Mustard");              //defining a variable with "new" constructor
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a " +Erik.Vehicle_Color+" -colored " +Erik.Vehicle_Model+" manufactured in " +Erik.Vehicle_Year;  // defining element for the html
}

document.write ("<br>");  //placing text in new line 

function Pet(Type,Color,Age) {     // defining function
    this.Pet_Type=Type;               // defining "this" consctructor
    this.Pet_Color=Color;             // defining "this" consctructor
    this.Pet_Age=Age;                // defining "this" consctructor
}

var Kenny= new Pet ("guinepig","mixed",4);  //defining a variable with "new" constructor
var Aisha= new Pet ("dog","white",3);      //defining a variable with "new" constructor
var JoJo= new Pet ("dog","black and white",1);  //defining a variable with "new" constructor
function pet_Function() {
    document.getElementById("New_and_This").innerHTML="Kenny is a " +Kenny.Pet_Color+ " color " +Kenny.Pet_Age+ " years old " +Kenny.Pet_Type;  // defining element for the html
}
   
function down(){    // defining function
    document.getElementById("Nested_Functions").innerHTML=down();   // defining element for the html
    function down() {  // defining element for the html
        var Starting_point=15;   //  defining a variable 
        function Minus_one () {Starting_point-=1;}  //assigning function name and its function 
        Minus_one ();   
        return Starting_point;  //  display result
    }
}
