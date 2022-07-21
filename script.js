
const calcBTN1 = document.getElementById('calc-button-1');


calcBTN1.addEventListener('click', function() {
    //converting the input string to hexadecimal and binary
    const input = document.getElementById('input-1').value;
    if (input <'0'){
        return
    }
    //Creates the Js variable input from the dom ID input-1 and takes the inner value of the DOM
    let intInput = parseInt(input);
    if (isNaN(input)) {
        return
    }
    //Changes input from a string to a integer for conversion
    const hexString = intInput.toString(16);
    const binaryString = intInput.toString(2);
    //converting the denary value to hexadecimal (Base 16) and binary (Base 2)
    const hexLi = document.createElement('li');
    const binaryLi = document.createElement('li');
    //creates a li DOM element
    const appendDiv = document.getElementById('append-text-1');
    //create a JS variable using the DOM object div for hex
    const hexText = document.createTextNode(hexString);
    appendDiv.appendChild(hexLi);
    hexLi.appendChild(hexText)
    //
    const appendDiv2 = document.getElementById('append-text-2');
    //
    const binaryText = document.createTextNode(binaryString);
    appendDiv2.appendChild(binaryLi)
    binaryLi.appendChild(binaryText)
    //
})

calcBTN1.addEventListener('click', function(){
    const input = document.getElementById('input-1').value = "";
})

const resetBTN = document.getElementById('reset-button');

resetBTN.addEventListener('click', function(){
    document.location.reload(true);
})



