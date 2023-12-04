function generate() {
    var inSeperator = document.getElementById("input-seperator").value;
    var outSeperator = document.getElementById("output-seperator").value;
    var input = document.getElementById("input").value.split(inSeperator);
    var sort = document.getElementById("sort").selectedIndex;
    let result = document.getElementById("output");
    var output = "";

    for(var i = 0; i < input.length; i++) {
        if(sort == 0) output += input.sort()[i]; else
        if(sort == 1) output += input.sort(function(a, b){return a - b})[i];
        if(i < input.length - 1) output += outSeperator;
    }

    result.value = output;
}