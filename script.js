let n = 13;
let count = 0;
for(let i=1; i<=n; i++){
  if(n%i==1){
    count++;
  }
}

if(count == 2){
  conosl.log(n+' '+'is a prime number');
} else{
  console.log(n+' '+'is not a prime number');
}