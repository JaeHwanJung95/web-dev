let num = parseInt(prompt("Enter a number"));
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;    
}

document.write(`1부터 ${num}까지의 합은 ${sum}입니다.`);