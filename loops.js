function forLoop(arr){
  for(var i=0 ; i < 25 ; i++){
    arr.push(`I am ${i} strange loop`);
  }
  return arr;
}
function whileLoop(n){
  while( n > 0){
    console.log( n-- );
  }
  return "Done";
}
