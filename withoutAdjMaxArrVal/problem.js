function singleArr(n,arr){

function FindMaxSum(arr, n)
{
	let incl = arr[0];
	let excl = 0;
	let excl_new;
	let i;

	for(i = 1; i < n; i++)
	{
		
		// Current max excluding i
		excl_new = (incl > excl) ? incl : excl;

		// Current max including i
		incl = excl + arr[i];
		excl = excl_new;
	}

	// Return max of incl and excl
	return ((incl > excl) ? incl : excl);
}


console.log(FindMaxSum(arr, n));

    
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
