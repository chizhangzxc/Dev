const NUM = BigInt(2 ** 1000)
console.log(NUM.toString().split("").reduce((a,b) => a+Number(b), 0))
