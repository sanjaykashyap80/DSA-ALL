function singleArr(n,arr){
    // console.log(N,arr);
    var count0 = 0, count1 = 0, count2 = 0, output = "";
    
  for ( var i = 0; i < n; i++) {
    if(arr[i] == 0 )
    count0++
    else if(arr[i] == 1 )
    count1++
    else
    count2++
  }
  
  for( i=0; i<count0; i++ ){
      output += "0 "
  }
  for( i=0; i<count1; i++ ){
      output += "1 "
  }
  for( i=0; i<count2; i++ ){
      output += "2 "
  }
  
//   console.log(count0,count1,count2)
  console.log(output.trim())
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
