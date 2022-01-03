function singleArr(a,b,c){
    // console.log(a,b,c);
    
    if(a+b>c && a+c>b && b+c>a){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}

function runProgram(input) {
    
    input = input.trim().split("\n");
    var t = +input[0];
    var line = 1
    
    for(var i=0; i<t; i++ ){
    // var N = +input[line++];
    var [a,b,c] = input[line++].split(" ").map(Number);
    singleArr(a,b,c);
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
