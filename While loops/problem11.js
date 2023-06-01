//Print the sum of all the multiples of 3 from 0 to the given limit
let a=3;
let b=20;
let sum=0;
while(a<=b){
  console.log("value of a->"+a)
  sum=sum+a;
  console.log("value of sum->"+sum)
  a=a+3;
}
console.log(sum);