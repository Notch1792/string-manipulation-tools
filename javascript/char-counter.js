function generate() {
    let result = document.getElementById("output");
    var input = document.getElementById("input").value;
    var cchar = document.getElementById("cchar").value;
    var output = 0;

    for(var i = 0; i < input.length; i++) {
        if(input.substring(i, i + cchar.length).includes(cchar)) {
            output++;
            i += Math.max(0, cchar.length - 1);
        }
    }

    console.log(output);

    result.value = output;
}