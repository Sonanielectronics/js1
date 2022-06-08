var a 

a = document.createElement("p");
b = document.createTextNode("my name is nikunj");
c = document.createComment("Hi");

// console.log(a);
// console.log(b);
// console.log(c);       

// var d = document.getElementById("it's require div");
// d.insertAdjacentElement("beforebegin",a)
    
// var d = document.getElementById("it's require div");
// var e = document.getElementById("it's require div").appendChild(a).appendChild(b);
// // d.insertAdjacentElement("beforebegin",e)  // 4 case is possible 
// // d.insertAdjacentElement("afterbegin",e)
// // d.insertAdjacentElement("afterend",e)
// // d.insertAdjacentElement("beforeend",e)

// var d = document.getElementById("it's require div");
// a = "<h1>this is header </h1>" ;
// d.insertAdjacentHTML("beforeend",a)  

var d = document.getElementById("it's require div");
a = "this is header" ;
d.insertAdjacentText ("beforeend",a) 

// console.log(1);

/////////////////////////////////////////////////////////////// previous video //////////////////////////////

// document.getElementById("it's require div").appendChild(a);
// document.getElementById("it's require div").appendChild(b);
// document.getElementById("it's require div").appendChild(a).appendChild(b);


