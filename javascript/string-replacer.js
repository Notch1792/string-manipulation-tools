function generate() {
    var input = document.getElementById("input").value;
    var replaceWith = document.getElementById("replace-with").value;
    var replaceThis = document.getElementById("replace-this").value;
    let result = document.getElementById("output");
    var output = "";

    output = input.replaceAll(replaceThis, replaceWith);

    result.value = output;
}