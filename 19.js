const { countBy } = require("underscore")

count = 0
const month = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
}
const month_leap = {
    0: 31,
    1: 29,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
}

day = 1
count = 0
for(let y = 1900; y<=2000; y++)
{
    is_leap = false;
    if(y % 100 != 0 & y % 4 == 0)
    {
        is_leap = true
    }
    else if (y % 400 == 0)
    {
        is_leap = true
    }

    if(is_leap == false)
    {
        for(let m = 0; m < 12; m++)
        {
            day = (day + month[m]) % 7
            // console.log(day, new Date(y, m+1, 1),y,m)

            if(y > 1900 & day == 0)
            {
                console.log(new Date(y, m+1, 1), y, m+1)
                count ++
            }
        }
    }
    else
    {
        for(let m = 0; m < 12; m++)
        {
            day = (day + month_leap[m]) % 7
            // console.log(day, new Date(y, m, 1))

            if(y > 1900 & day == 0)
            {
                console.log(new Date(y, m+1, 1), y, m+1)
                count ++
            }
        }
    }

}


console.log(count)
// console.log(new Date(1900, 1, 1), new Date(1900, 1, 1).getDay())

