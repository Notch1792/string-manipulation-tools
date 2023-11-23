function search() {

    console.log("Fetching input...");

    var seperator = document.getElementById("seperator").value;
    var searchQuery = document.getElementById("keywords").value;
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var input = document.getElementById("input").value;
    var output = "";
    var matches = 0;
    var lowercase = document.getElementById("lowercase").checked;
    let result = document.getElementById("result");

    console.log("Fetched input!");
    console.log("Lowercase: " + lowercase);


    if(lowercase) searchQuery = searchQuery.toLowerCase();
    searchQuery = searchQuery.split(seperator);

    console.log("Started main loop!");

    for(var i = min; i <= max; i++) {

        var osetStr = oset(input, i, false);
        if(lowercase) osetStr = osetStr.toLowerCase();
        for(var i2 = 0; i2 < searchQuery.length; i2++) {

            if(osetStr.includes(searchQuery[i2])) {

                output += i + " | " + oset(input, i, false) + '\n';
                console.log("Match found, Adding to results!");
                matches++;
            }
        }
    }

    console.log("Main loop finished! Pushing results to HTML.");
    result.value = output;
    console.log("Search finished, (" + matches + ") matches found!")

}

function filter() {
    let projects = document.getElementsByClassName("sidelist__");
    let searchBar = document.getElementById("search");
    let searchQuery = searchBar.value.toLowerCase();

    for (var i = 0; i < projects.length; i++) {
        let item = projects[i];
        var itemText = item.innerHTML;

        if(itemText.includes(searchQuery)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }

    sidelist.scrollTop =  (sidelist.scrollHeight - sidelist.clientHeight )/2;
};

function generate() {
    var input = document.getElementById("input").value;
    var offset = parseInt(document.getElementById("offset").value);
    var rmSpaces = document.getElementById("rm-spaces").checked;
    let sidelist = document.getElementById("sidelist");
    var output = "";

    output = oset(input, offset, rmSpaces);

    sidelist.innerHTML = "";
    for(let i = -100; i <= 100; i++) {
        var style = "";
        if(i == 0) style = "style=\"color: var(--color-main)\"";
        sidelist.innerHTML += ("<p class=\"text sidelist__\"" + style + ">" + i + " | " + oset(input, i, rmSpaces) + "</p>");
    }
    sidelist.scrollTop =  (sidelist.scrollHeight - sidelist.clientHeight )/2;

    document.getElementById("output").value = output;
}

function oset(input, offset, rmSpaces) {
    let output = "";
    for(let i = 0; i < input.length; i++) {
        let skip = false;
        if(rmSpaces == true && input[i] == " ")
            skip = true;
        if(!skip)
            output += fromInt(toInt(input[i]) + offset);
    }
    return(output);
}

function toInt(value) {
    return(value.charCodeAt(0));
}
function fromInt(input) {
    return(String.fromCharCode(input));
}