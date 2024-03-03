

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;

};

function clearDisplay(){
    display.value = '';
};

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }
}

function changeColourRed(){
    var element = document.querySelector('#calculator');
    var display = document.getElementById('display');
    var button = document.querySelectorAll('button');
    var operatorButton = document.querySelectorAll('.operator-btn');

    element.style.backgroundColor = "hsl(0, 100%, 55%)";
    display.style.backgroundColor = "hsl(0, 100%, 55%)";

    button.forEach(function(button) {
        button.style.backgroundColor = "hsl(0, 100%, 60%)";
        button.style.borderColor = "hsl(0, 100%, 70%)";
        button.style.color = "hsl(0, 0%, 100%)";
    });
    
    operatorButton.forEach(function(button) {
        button.style.backgroundColor = "hsl(0, 100%, 70%)";
        button.style.borderColor = "hsl(0, 100%, 80%)";
    });

}

function changeColourGreen(){
    var element = document.querySelector('#calculator');
    var display = document.getElementById('display');
    var button = document.querySelectorAll('button');
    var operatorButton = document.querySelectorAll('.operator-btn');

    element.style.backgroundColor = "hsl(113, 100%, 35%)";
    display.style.backgroundColor = "hsl(113, 100%, 35%)";
    display.style.color = "hsl(0, 0%, 20%)";

    button.forEach(function(button) {
        button.style.backgroundColor = "hsl(113, 100%, 50%)";
        button.style.borderColor = "hsl(113, 100%, 70%)";
        button.style.color = "hsl(0, 0%, 20%)";
    });
    
    operatorButton.forEach(function(button) {
        button.style.backgroundColor = "hsl(113, 100%, 70%)";
        button.style.borderColor = "hsl(113, 100%, 80%)";
    });

}

function changeColourBlue(){
    var element = document.querySelector('#calculator');
    var display = document.getElementById('display');
    var button = document.querySelectorAll('button');
    var operatorButton = document.querySelectorAll('.operator-btn');

    element.style.backgroundColor = "hsl(229, 100%, 35%)";
    display.style.backgroundColor = "hsl(229, 100%, 35%)";
    display.style.color = "hsl(0, 0%, 100%)";

    button.forEach(function(button) {
        button.style.backgroundColor = "hsl(229, 100%, 50%)";
        button.style.borderColor = "hsl(229, 100%, 70%)";
        button.style.color = "hsl(0, 0%, 100%)";
    });
    
    operatorButton.forEach(function(button) {
        button.style.backgroundColor = "hsl(229, 100%, 70%)";
        button.style.borderColor = "hsl(229, 100%, 80%)";
    });

}
