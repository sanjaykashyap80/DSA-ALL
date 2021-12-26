//Partially accepted

function unitsConsumed(n) {
    //write code here
  var unit=0;
  n=n-80;
  if(n<=150){
 unit=n/3;
    
  } else if(n>150 && n<=750){
   unit=50+((n-150)/5);
  }
  if(n>750){
  unit=150+((n-750)/10);
  }
  console.log(unit);
}
