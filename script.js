let n = 13;
let count = 0;
for(let i=1; i<=n; i++){
  if(n%i==0){
    count++;
  }
}

if(count == 2){
  conosl.log("it is a prime number");
} else{
  console.log("it is not a prime number');
}


let str = "racecar";
let rev = '';
for(let i=str.length-1; i<0; i--){
  rev+=str[i];
}

if(rev == str){
  console.log("Palindrom");
} else {
  console.log("Not a Palindrome")
}


