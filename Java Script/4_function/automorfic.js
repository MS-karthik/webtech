let num = function (num) {
  let sq = num * num;

  while (num > 0) {
    let numld = num % 10;
    let sqlld = sq % 10;
    if (numld != sqlld) {
      return false;
    }
    num = Math.floor(num / 10);
    sq = Math.floor(sq / 10);
  }
  return true;
};

console.log(num(25));
