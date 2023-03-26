function generate() {

    let input = document.getElementById("input").value;
    let output = "";

    for(let x = 0; x < input.length; x++)
        if(input[x] == '\\')
            for(let i = 1; i <= 3; i++) {

                let holdout = "";

                if(input[x] != ',')
                    holdout+= input[x + i];
                else break;

            }

    document.getElementById("output").value = output;

}