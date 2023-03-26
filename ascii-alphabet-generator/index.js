function generate() {

    let input = document.getElementById("input").value;
    let output = "";

    for(let x = 0; x < input.length; x++)
        if(input[x] == '\\') {

            let first = 0;
            let second = 0;

            for(let firstIndex = 1; firstIndex <= 3; firstIndex++) {

                if(input[x] != ',')
                    first+= parseInt(input[x + firstIndex]);
                else {

                    for(let secondIndex = 1; secondIndex <= 3; secondIndex++) {

                        if(input[x] != '\\' || input[x] != '\\')
                            second+= parseInt(input[x + firstIndex]);

                    }

                }

            }

            output+= String.fromCharCode(first) + String.fromCharCode(second);

        }

    document.getElementById("output").value = output;

}