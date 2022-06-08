var a = document.getElementById("list1").children[0] ;
var b = a.cloneNode();

// console.log(document.getElementById("list1").children[0].cloneNode());  // this is run in inspect
//console.log(document.getElementById("list1").children[0].cloneNode(true));  // by default false value 

document.getElementById("list2").appendChild(b);  // run in inspect bcz we can't run above program in here
document.getElementById("test").appendChild(b);  // here we are add in div element