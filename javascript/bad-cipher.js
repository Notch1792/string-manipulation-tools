alert("Not responsible for your data and key getting compromised if you use this tool");

function encrypt() {
    let result = document.getElementById("output");
    var input = document.getElementById("input").value;
    var key = document.getElementById("key").value;
    var output = "";

    for(var i = 0; i < input.length; i++) {
        output += fromInt(toInt(input[i]) + toInt(key[i%key.length]));
    }

    result.value = output;
}

function decrypt() {
    let result = document.getElementById("output");
    var input = document.getElementById("input").value;
    var key = document.getElementById("key").value;
    var output = "";

    for(var i = 0; i < input.length; i++) {
        output += fromInt(toInt(input[i]) - toInt(key[i%key.length]));
    }

    result.value = output;
}


function toInt(value) {
    return(value.charCodeAt(0));
}
function fromInt(input) {
    return(String.fromCharCode(input));
}