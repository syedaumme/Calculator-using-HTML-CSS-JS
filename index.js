const display= document.getElementById("display");

function todisplay(input){
  display.value +=input;

}
function result(input){
    try{
    let res = eval(display.value);
    display.value = res.toFixed(2); /* in order to fix result to 8 decimal places */
    }
    catch(error){
        display.value ="Error";

    }

}
function cleardisplay(input){
    display.value ="";

}