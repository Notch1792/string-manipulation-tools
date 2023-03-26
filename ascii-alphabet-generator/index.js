function generate() {

    let input = document.getElementById("input").value;
    let output = "";

    for(let x = 0; x < input.length; x++)
        if(input[x] == '\\') {

            let first = 0;
            let second = 0;

            for(let firstIndex = 1; firstIndex <= 3; firstIndex++) {

                if(input[x + firstIndex] != ',') {

                    console.log(parseInt(input[x + firstIndex]));

                    first*= 10;
                    first+= parseInt(input[x + firstIndex]);
                }

            }

            console.log(first);

            output+= String.fromCharCode(first);

        }

    console.log(output);

    document.getElementById("output").value = output;

}