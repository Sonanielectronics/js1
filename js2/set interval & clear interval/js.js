// setInterval(xyz, 1000);  // run in inspect

// function xyz(){
//     document.write("hi");
// }

// var a = 10 ;
// setInterval(xyz, 1000);  // run in inspect

// function xyz(){
//     a = a + 10 ;
//     var b = document.getElementById("test");
//     b.style.marginLeft = a + 'px' ;
//     document.write("hi");
// }

//////////////////////////////////////////////  clear interval //////////////////////////////////////////////

var a = 10 ;  // run in inspect
var b = setInterval(xyz, 1000);  

function xyz(){
    a = a + 10 ;
    
    if(a == 200){
        clearInterval(b);
    }else{
        var c = document.getElementById("test");
        c.style.marginLeft = a + 'px' ;
    }
}

