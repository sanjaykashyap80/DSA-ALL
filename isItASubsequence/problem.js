function string(str1,str2){
    
//   console.log(str1,str2);
     var N1 = str1.length, N2 = str2.length, start = 0, count = 0;

     for(var i=0; i<N1; i++){
         for(var j=start; j<N2; j++){
             if(str1[i] == str2[j]){
                count++
                start = j+1
                break;
             }
               
         }
     }
     
     if(count == N1)
      console.log("YES");
     else
      console.log("NO");

}

function runProgram(input) {
    
    input = input.trim().split("\n");
    var t = +input[0]
    var line = 1;
    
    for(var i=0; i<t; i++){
        var str1 = input[line++]
        var str2 = input[line++]
    string(str1,str2);
    }
    
  }
  if (process.env.USERNAME === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }
