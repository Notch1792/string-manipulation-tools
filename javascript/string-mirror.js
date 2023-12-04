function generate() {
    var input = document.getElementById("input").value;
    var seperator = document.getElementById("seperator").value;
    var rmSeperator = document.getElementById("rm-seperator").checked;
    let result = document.getElementById("output");
    var output = "";
    var realSeperator = "";

    if(seperator == '')
    for(var i = input.length - 1; i >= 0; i--) {
        output += input[i];
    } else {
        if(!rmSeperator) realSeperator = seperator;
        output += input.split(seperator)[1] + realSeperator + input.split(seperator)[0];
    }

    result.value = output;
}