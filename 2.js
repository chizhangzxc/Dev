// naive method
const UPPER_LIMIT = 4000000
let fib = [1,1]



while(true)
{
    let next = fib[fib.length-2] + fib[fib.length-1];
    if (next < UPPER_LIMIT)
    {
        fib.push(next)
    }
    else
    {
        break
    }
}
console.log(fib.filter(x => x % 2 == 0).reduce((a,b) => a+b, 0))
console.log(fib.filter(x => x % 2 != 0).reduce((a,b) => a+b, 0))

// function solution(n) {
//     var a = 1, b = 2;
//     var s = 0;
//     var t;
  
//     while (a <= n) {
//       t = a;
//       a = b;
//       b+= t;
//       s+= (-2 | t) + 1 & t; // Or a & -(a & 1 ^ 1)
//     }
//     return s;
//   }
// console.log(solution(4e6));