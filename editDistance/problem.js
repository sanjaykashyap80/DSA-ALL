function string(str1,str2){
    
//   console.log(str1,str2);
  var n = str1.length+1, m = str2.length+1, temp = [], arr = [];
  
 for(var i=0; i<n; i++){
      arr.push([]);
  }
 
 for(var i=0; i<n; i++) {
      arr[i][0] = i
      for(j=1; j<m; j++){
        arr[i][j] = 0
      }
  }
  
 for(var i=0; i<m; i++){
   
      arr[0][i] = i
  }
var temp = arr;
//   console.log(temp)
  
  

 for(var i=1; i<n; i++){
     for(var j=1; j<m; j++){
         if(str1[i-1] == str2[j-1])
          temp[i][j] = temp[i-1][j-1]
          else
          temp[i][j] = Math.min(temp[i-1][j-1], temp[i-1][j], temp[i][j-1]) + 1;
     }
 }
 
 console.log(temp[n-1][m-1])

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
