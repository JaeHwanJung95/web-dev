let num = parseInt(prompt("숫자를 입력하세요."));
let sum = 0;

for(let i = 1; i <= num; i++) {
    sum += i;
}
document.write(`1부터 ${num}까지 더한 값은 ${sum}입니다.`)