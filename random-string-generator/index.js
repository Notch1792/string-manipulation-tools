function generate() {
    
    let input = document.getElementById("input").value.split(document.getElementById("seperator").value);
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    let output = "";
    
    for(let i = 0; i < randomInt(min, max); i++) {
        output+= input[randomInt(0, input.length)];
    }

    document.getElementById("output").value = output;

}

function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}