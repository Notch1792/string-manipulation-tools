function search() {
    var seperator = document.getElementById("seperator").value;
    var searchQuery = document.getElementById("keywords").value.split(seperator);
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var input = document.getElementById("input").value;
    var output = "";
    let result = document.getElementById("result");

    for(var i = min; i <= max; i++) {

        var osetStr = oset(input, i, false);
        for(var i2 = 0; i2 < searchQuery.length; i2++) {

            if(osetStr.includes(searchQuery[i2])) {

                output += i + " | " + osetStr + '\n';
            }
        }
    }

    result.value = output;

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