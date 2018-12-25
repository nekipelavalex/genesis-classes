var helloWold = function(name) { //example1
    return "Hello, "+ name;
}

var calculateDifference = function(arg1, arg2, arg3) { //example2
    return arg1 - arg2 - arg3;
}

var dayOrNight = function(arg1) { //example3
    if (arg1 == 1){
        console.log ("day"); 
    }
    if (arg1 == 2){
        console.log ("night");
    }
}

var isResultValid = function(arg1, arg2, arg3) { //example4
    return arg1 + arg2 == arg3;
}

var five = function() { //example5
    for (var i = 0; i < 5; i++){
        console.log("Hello world!");
    }
}

function clickmeone() {
    var cardnumber = prompt("Введите номер");
    alert(cardnumber);    
}

var redClick = 0;
function clickMeRed() {  
    var element = document.getElementById("redClick");  
    element.style.color = (redClick % 2 == 0) ? "red" : "black"; 
    redClick++;
}

