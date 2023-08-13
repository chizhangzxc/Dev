var fs = require('fs')
names = fs.readFileSync('0022_names.txt', 'utf8')

const isLetter = function(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

const char_to_num = function(char)
{
    return(char.toUpperCase().charCodeAt()-"A".charCodeAt() + 1)
}


const string_to_num = function(str)
{
    return(str.split("").filter(x => isLetter(x)).map(x => char_to_num(x)))
}


name_score = names.split(",").map(x => string_to_num(x).reduce((a,b) => a*b, 1))

console.log(name_score.reduce((s,n,i) => s + ((n+1)*i),0))

sum = 0
for(let i = 1; i <= name_score.length;i++)
{
    sum += name_score[i-1]*i
}
console.log(sum)

