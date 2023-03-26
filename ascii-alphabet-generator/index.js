function generate() {

    let input = document.getElementById("input").value;
    let output = "";

    for(let x = 0; x < input.length; x++)
        if(input[x] == '\\') {

            let first = 0;
            let second = 0;

            for(let firstIndex = 1; firstIndex <= 3; firstIndex++) {
                console.log(parseInt(input[x + firstIndex]));
                if(input[x] != ',')
                    first+= parseInt(input[x + firstIndex]);
                else {

                    for(let secondIndex = 1; secondIndex <= 3; secondIndex++) {

                        if(input[x] != '\\' || input[x] != '\\')
                            second+= parseInt(input[x + firstIndex]);

                    }

                }

            }

            console.log(first);
            console.log(second);
            console.log(String.fromCharCode(first));
            console.log(String.fromCharCode(second));

            output+= String.fromCharCode(first) + String.fromCharCode(second);

        }

    console.log(output);

    document.getElementById("output").value = output;

}