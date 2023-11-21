function generate() {
  let charSeperator = document.getElementById("charSeperator").value;
  let stringSeperator = document.getElementById("stringSeperator").value;
  let range = document.getElementById("input").value;
  let ranges = [], rangeIndex = 0, tmpI = 0;
  let output = "";

  for(let i = 0; i <= range.length; i++)
    if(range.charAt(i) == '/') {
      ranges = ranges.concat([[range.charAt(i + 1), range.charAt(i + 3)]]);
      rangeIndex += 1;
    } else if(range.charAt(i) == '\\') {
      for(let i2 = 1; i2 <= 3; i2++)
        if(range.charAt(i + i2) != '-')
          tmpI = tmpI * 10 + parseInt(range.charAt(i + i2));
        else
          i2 = 4;
      ranges = ranges.concat([[tmpI]]);
      tmpI = 0;
      for(let i2 = ranges[rangeIndex][0].toString().length + 2; i2 <= ranges[rangeIndex][0].toString().length + 4; i2++)
        if(range.charAt(i + i2) != '\\' && range.charAt(i + i2) != ',' && range.charAt(i + i2) != '')
          tmpI = tmpI * 10 + parseInt(range.charAt(i + i2));
        else
          i2 = ranges[rangeIndex][0].toString().length + 5;
      ranges[rangeIndex][1] = tmpI;
      rangeIndex += 1;
    }

  for(let i = 0; i < ranges.length; i++){
    for(let i2 = toInt(ranges[i][0]); i2 <= toInt(ranges[i][1]); i2++){

      output += String.fromCharCode(i2);
      if(i2 < toInt(ranges[i][1])) output += charSeperator;
    }
    if(i < ranges.length - 1) output+= stringSeperator;
  }

  document.getElementById("output").value = output;
  console.log(range);
  console.log(ranges);
  console.log(output);
}

function toInt(value) {
  if(typeof value == "number")
    return(value);
  else
    return(value.charCodeAt(0));
}