function ascii() {

    let output = "";

    for(let i = 0; i < 128; i++)
        output+= String.fromCharCode(i);

    document.getElementById("seperator").value = "";
    document.getElementById("input").value+= output;
}
function asciiLimited() {
    document.getElementById("input").value+= "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
}
function numbers() {
    document.getElementById("input").value+= "0123456789";
}
function uppercase() {
    document.getElementById("input").value+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
function lowercase() {
    document.getElementById("input").value+= "abcdefghijklmnopqrstuvwxyz";
}
function symbols() {
    document.getElementById("input").value+= "!\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";
}

function generate() {

    let input = document.getElementById("input").value.split(document.getElementById("seperator").value);
    let seperator = document.getElementById("output-seperator").value;
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let output = "";

    if(min > max) {
        alert("Error: min > max");
    }
    
    for(let i = 0; i < randomInt(min, max); i++) {
        output+= input[randomInt(0, input.length - 1)];
        if(i < max - 1) output+= seperator;
    }

    document.getElementById("output").value = output;
    console.log(output);
}

function reset() {
    document.getElementById("input").value = "";
    document.getElementById("seperator").value = "";
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}