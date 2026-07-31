let a = 0;
let b = 1;

let fnum = 10;

console.log(a);
console.log(b);


for (let i = 3; i <= fnum; i++) {
  let c=a +b;
  a=b;
  b=c;
  console.log(b);
  
}
