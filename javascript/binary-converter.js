function generate(type) {
    let result = document.getElementById("output");
    var input = document.getElementById("input").value;
    var seperatorOut = document.getElementById("seperatorOut").value;
    var seperatorIn = document.getElementById("seperatorIn").value;
    var content = input.split(seperatorIn);
    var mode = document.getElementById("switch").checked;
    var output = "";

    for(var i = 0; i < content.length; i++) {
        if(type == 0) {
            if(mode == 0) output+= toBinary(content[i]);
            else if(mode == 1) output+= toBinary(toInt(input[i]));
        } else if(type == 1) {
            if(mode == 0) output+= fromBinary(content[i]);
            else if(mode == 1) output+= fromInt(fromBinary(content[i]));
        }
        if(i + 1 < content.length) output+= seperatorOut;
    }

    result.value = output;
}

function toBinary(x) {
    var output = "";
    for(var n = 0; n < Math.log2(x) + 1; n++) {
        output = (Math.floor(x/Math.pow(2, n)) - Math.floor(x/Math.pow(2, n + 1))*2) + output;
    }
    return output;
}
function fromBinary(x) {
    output = 0;
    for(var n = 0; n < x.length; n++) {
        if(x[n] == 1) output+= 2**(x.length - n - 1);
    }
    return output;
}
function toInt(value) {
    return(value.charCodeAt(0));
}
function fromInt(input) {
    return(String.fromCharCode(input));
}