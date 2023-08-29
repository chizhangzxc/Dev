const isPrime = function(n) 
{
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    if (n==leastFactor(n)) return true;
    return false;
}
   
   
const   leastFactor = function(n)
{
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n==0) return 0;  
    if (n%1 || n*n<2) return 1;
    if (n%2==0) return 2;  
    if (n%3==0) return 3;  
    if (n%5==0) return 5;  
    var m = Math.sqrt(n);
    for (var i=7;i<=m;i+=30) {
     if (n%i==0)      return i;
     if (n%(i+4)==0)  return i+4;
     if (n%(i+6)==0)  return i+6;
     if (n%(i+10)==0) return i+10;
     if (n%(i+12)==0) return i+12;
     if (n%(i+16)==0) return i+16;
     if (n%(i+22)==0) return i+22;
     if (n%(i+24)==0) return i+24;
    }
    return n;
}

const UPPER_LIMIT = 100000000
let num = 2
let pandigital_prime = []
while(num < UPPER_LIMIT)
{
    if(num.toString().length == new Set(num.toString()).size & Math.max(...num.toString().split("")) == num.toString().length & Math.min(...num.toString().split("")) == 1)
    {
        if(isPrime(num))
        {
            pandigital_prime.push(num)
        }               
    }
    num++
}
console.log(pandigital_prime[pandigital_prime.length-1])