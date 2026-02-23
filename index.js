//calculator program

const display = document.getElementById("display");

function resultDisplay(input){
    if(display.value.length < 12){
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculator(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error"
    }
}