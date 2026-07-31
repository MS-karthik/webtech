// Named Function

function empDetaild() {
  console.log("miller");
  console.log(101);
}

empDetaild();

function add(a, b) {
  console.log(a + b);
}
add(2, 3);
add(23, 77);

function sub(a, b) {
  return a - b;
}

let res = sub(40, 10);
console.log(res);

// spy number

function spynum(num) {
  let add = 0;
  let mul = 1;

  while (num > 0) {
    let temp = num % 10;
    add = add + temp;
    mul = mul * temp;
    num = Math.floor(num / 10);
  }
  return add == mul;
}

console.log(spynum(123));
