function calcSum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(`1부터 5까지 더하면 ${sum}입니다.`);
}

calcSum(5);