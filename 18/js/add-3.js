function calcSum(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

let userNumber = parseInt(prompt("숫자를 입력하세요. (0보다 큰 값)"));
let result = calcSum(userNumber); // result = sum
document.write(`1부터 ${userNumber}까지 더한 값은 ${result}입니다.`);