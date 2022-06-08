// document.getElementById("outer").addEventListener("click",abc) ;
// document.getElementById("inner").addEventListener("click",xyz) ;

// function abc(){
//     alert("outer");
// }

// function xyz(){
//     alert("inner");
// }

document.getElementById("outer").addEventListener("click",abc,true) ;
document.getElementById("inner").addEventListener("click",xyz,true) ;

function abc(){
    alert("outer");
}

function xyz(){
    alert("inner");
}