function generateTo() {
    let result = document.getElementById("output");
    var input = document.getElementById("input").value;
    var seperatorOut = document.getElementById("seperatorOut").value;
    var mode = document.getElementById("switch").checked;
    console.log(mode);
    var output = "";

    if(mode == 0) {
        var seperatorIn = document.getElementById("seperatorIn").value;
        var content = input.split(seperatorIn);
        for(var i = 0; i < content.length; i++) {
            output+= toBinary(content[i]);
            if(i + 1 < content.length) output+= seperatorOut;
        }
    } else if(mode == 1) {
        for(var i = 0; i < input.length; i++) {
            output+= toBinary(toInt(input[i]));
            if(i + 1 < input.length) output+= seperatorOut;
        }
    }

    result.value = output;
}

function generateFrom() {
    let result = document.getElementById("output");
    var input = document.getElementById("input").value;
    var seperatorOut = document.getElementById("seperatorOut").value;
    var seperatorIn = document.getElementById("seperatorIn").value;
    var content = input.split(seperatorIn);
    var mode = document.getElementById("switch").checked;
    var output = "";

    if(mode == 0) {
        for(var i = 0; i < content.length; i++) {
            output+= fromBinary(content[i]);
            if(i + 1 < content.length) output+= seperatorOut;
        }
    } else if(mode == 1) {
        for(var i = 0; i < content.length; i++) {
            output+= fromInt(fromBinary(content[i]));
            if(i + 1 < content.length) output+= seperatorOut;
        }
    }

    result.value = output;
}

function toBinary(x) {
    var output = "";
    for(var n = 0; n < Math.log2(x) + 1; n++) {
        output+= Math.floor(x/Math.pow(2, n)) - Math.floor(x/Math.pow(2, n + 1))*2;
    }
    return output;
}
function fromBinary(x) {
    output = 0;
    for(var n = 0; n < x.length; n++) {
        if(x[n] == 1)
        output+= 2**n;
    }
    return output;
}
function toInt(value) {
    return(value.charCodeAt(0));
}
function fromInt(input) {
    return(String.fromCharCode(input));
}