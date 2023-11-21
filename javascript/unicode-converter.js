function generateTo() {
    let input = document.getElementById("input").value.split(document.getElementById("input-seperator").value);
    let inSeperator = document.getElementById("input-seperator").value;
    let outSeperator = document.getElementById("output-seperator").value;
    let output = "";

    for(let i = 0; i < input.length; i++) {
        output += toInt(input[i]);
        if(i < input.length - 1) output+= outSeperator;
    }

    document.getElementById("output").value = output;
}
function generateFrom() {
    let input = document.getElementById("input").value.split(document.getElementById("input-seperator").value);
    let inSeperator = document.getElementById("input-seperator").value;
    let outSeperator = document.getElementById("output-seperator").value;
    let output = "";

    for(let i = 0; i < input.length; i++) {
        output += fromInt(input[i]);
        if(i < input.length - 1) output+= outSeperator;
    }

    document.getElementById("output").value = output;
}

function toInt(value) {
    return(value.charCodeAt(0));
}
function fromInt(input) {
    return(String.fromCharCode(input));
}