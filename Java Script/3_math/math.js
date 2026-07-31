// maximum number

console.log(Math.max(5, 8, 19, 25, 45));

// minimum number

console.log(Math.min(9, 5, 8, 29, 4, 3));

// !math.sqrt()

console.log(Math.sqrt(100));

// !math.abs

console.log(Math.abs(-20));

// ! math.floor()

console.log(Math.floor(5.3));

// ! math.ceil()

console.log(Math.ceil(4.6));

// ! Math.round

console.log(Math.round(5.4));
console.log(Math.round(5.7));

// ! math.random

console.log(Math.random());

// ! Generate one number between 0 to 10

console.log(Math.floor(Math.random() * 10));

//  ! generate OTP

let otp = Math.floor(Math.random() * 9000 + 1000);

console.log(otp);

//  ! generate number between 10 to 25

let num = Math.floor(Math.random() * 16 + 10);
console.log(num);

// ! math.pow

console.log(Math.pow(2, 3));

let b=2;
let p=5;
let sum=1;

for(let i=1; i >=p ; i++){
    sum= sum * b;
}
console.log(sum);
