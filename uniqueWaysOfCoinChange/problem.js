function squareMat(N,k,arr){

function countWays(S , m , n)
{
	
	var table = Array(n+1).fill(0);
	
	// Base case (If given value is 0)
	table[0] = 1;

	for (i=0; i<m; i++)
		for (j=S[i]; j<=n; j++)
			table[j] += table[j-S[i]];

	return table[n];
}

console.log(countWays(arr, N, k));

    
}

function runProgram(input) {
    
    input = input.trim().split("\n");

    var [M,N] = input[0].split(" ").map(Number);
    
    var arr = input[1].split(" ").map(Number);

    squareMat(N,M,arr)
    
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
