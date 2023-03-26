function generate() {

    let input = document.getElementById("input").value;
    let output = "";

    for(let x = 0; x < input.length; x++)
        if(input[x] == '\\') {

            let first = 0;
            let second = 0;

            for(let firstIndex = 1; firstIndex <= 3; firstIndex++) {

                if(input[x + firstIndex] != ',') {

                    first*= 10;
                    first+= parseInt(input[x + firstIndex]);

                } else {

                    for(let secondIndex = 1; secondIndex <= 3; secondIndex++) {

                        if(input[x + firstIndex + secondIndex] != '\\' && input[x + firstIndex + secondIndex] != '/' && input[x + firstIndex + secondIndex] != undefined) {
        
                            second*= 10;
                            second+= parseInt(input[x + secondIndex + firstIndex]);

                        }

                    }

                    firstIndex = 3;

                }

            }

            console.log(first);

            output+= String.fromCharCode(first);

        }

    console.log(output);

    document.getElementById("output").value = output;

}