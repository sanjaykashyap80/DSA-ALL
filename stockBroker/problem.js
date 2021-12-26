function singleArr(N,arr){
       
      var min = 99999999999999, index = 0;
       
      for(var i=0; i<N; i++){
          if(arr[i]< min ){
              min = arr[i];
              index = i;
          }
      }
    
    var diff = 0;
 
        for(var j=index; j<N; j++){
            if(diff < (arr[j]-min))
             diff = arr[j]-min;
        }

      console.log(diff);
}

function runProgram(input) {
    
    input = input.trim().split("\n");
    var t = +input[0];
    var line = 1
    
    for(var i=0; i<t; i++ ){
    var N = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    singleArr(N,arr);
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
