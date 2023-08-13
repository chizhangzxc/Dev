const dg = ['zero','one','two','three','four','five','six','seven','eight','nine'];
const tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']

function isLetter(str) 
{
    return str.length === 1 && str.match(/[a-z]/i);
}

num_to_word = function(num)
{
    word = ""
    if(num == 1000)
    {
        word = word + "One thousand"
        num = num % 1000
    }
    if(num > 100)
    {
        word = word + dg[Math.floor(num/100)] + " hundred"
        num = num % 100
        if(num != 0)
        {
            word = word + " and "
        }
    }
    if(num >= 20)
    {
        word = word + tw[Math.floor(num/10)-2]
        num = num - 10*(Math.floor(num/10))
        if(num > 0)
        {
            word = word + "-"
        }
    }
    if(num>=10)
    {
        word = word + tn[num-10]
        num = num - 20

    }
    if(num>0)
    {
        word = word + dg[num]

    }
    
    return(word)
}

for(let i = 1; i <= 1000; i++)
{
    console.log(num_to_word(i), num_to_word(i).split("").filter(x => isLetter(x)).length)
}