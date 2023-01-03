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


let str = 'racecar';
let revStr = '';
for(let i=str.length-1; i<0; i--){
  revStr+=str[i];
}
console.log(revStr);
if(revStr == str){
  console.log("Palindrom");
} else {
  console.log("Not palindrome")
}


