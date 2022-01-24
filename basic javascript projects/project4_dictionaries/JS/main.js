function my_Dictionary () {   //defining function
    var watch={              //defining the key
        Type:"Mechanical",   //defining keys value
        Color:"Silver",     //defining keys value
        Brand:"Cartier",    //defining keys value
        Price:12000         //defining keys value
    };
    document.getElementById("Dictionary").innerHTML=watch.Type;  // Putting value into HTML element 
}

function my_Dictionary1 () {   //defining function
    var watch={              //defining the key
        Type:"Mechanical",   //defining keys value
        Color:"Silver",     //defining keys value
        Brand:"Cartier",    //defining keys value
        Price:12000         //defining keys value
    };
    delete watch.Type;      //defining an operator that removes value
    document.getElementById("Dictionary1").innerHTML=watch.Type;  // Putting value into HTML element 
}
