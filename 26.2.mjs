function patternFound(arr) 
{
var newArray = arr.map(function(o, i) {
    if (i < arr.length - 1) {
        return arr[i] + "|" + arr[i + 1];
    }
    })
    .sort();

newArray = newArray.filter(function(o, i) {
    if (i < arr.length - 1) {
        return (o == newArray[i + 1]);
    }
    });

return (newArray.map(x => x[0]).join("") + newArray[newArray.length-1].slice(-1));
}
  
const denominator = 3
let numerator  = 1
let digits = []

while(true)
{
  let last_digit = Math.floor(10*numerator / denominator)
  digits.push(last_digit)

  numerator  = 10 * numerator % denominator
  if(numerator == 0)
  {
    break
  }
  if(digits.length == 2 * (denominator-1))
  {
    break
  }
}

console.log(patternFound(digits))
