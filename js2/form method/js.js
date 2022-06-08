
function focusfunction(){
    document.getElementById("fname").style.background = "yellow" ;
}

function blurfunction(){
    document.getElementById("fname").style.background = "white" ;
}

function inputfunction(element){
    document.getElementById("test").innerHTML = element.value ;
}

function changefunction(element){
    document.getElementById("test").innerHTML = element.value ;
}

function selectfunction(){
    console.log(1);
}

function submitfunction(){
    alert(document.getElementById("fname").value);
}

