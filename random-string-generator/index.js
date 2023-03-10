function ascii() {

    let output = "";

    for(let i = 0; i < 128; i++){
        output+= String.fromCharCode(i);
        output+= "\\/";
    }

    document.getElementById("seperator").value = "\\/";
    document.getElementById("input").value = output;
}
function asciiLimited() {
    document.getElementById("seperator").value = "\\/";
    document.getElementById("input").value = "\\/!\\/\"\\/#\\/$\\/%\\/&\\/'\\/(\\/)\\/*\\/+\\/,\\/-\\/.\\//\\/0\\/1\\/2\\/3\\/4\\/5\\/6\\/7\\/8\\/9\\/:\\/;\\/<\\/=\\/>\\/?\\/@\\/A\\/B\\/C\\/D\\/E\\/F\\/G\\/H\\/I\\/J\\/K\\/L\\/M\\/N\\/O\\/P\\/Q\\/R\\/S\\/T\\/U\\/V\\/W\\/X\\/Y\\/Z\\/[\\/\\/\\]\\/^\\/_\\/`\\/a\\/b\\/c\\/d\\/e\\/f\\/g\\/h\\/i\\/j\\/k\\/l\\/m\\/n\\/o\\/p\\/q\\/r\\/s\\/t\\/u\\/v\\/w\\/x\\/y\\/z\\/{\\/|\\/}\\/~\\/";
}

function generate() {

    let input = document.getElementById("input").value.split(document.getElementById("seperator").value);
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let output = "";

    if(min > max) {
        alert("Error: min > max");
    }
    
    for(let i = 0; i < randomInt(min, max); i++) {
        output+= input[randomInt(0, input.length - 1)];
    }

    document.getElementById("output").value = output;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}