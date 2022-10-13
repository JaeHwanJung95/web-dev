let n;
let sum = 0;

n = parseInt(prompt("숫자 입력(1보다 큰 수): "));

for (let i = 1; i <= n; i++) {
  if (i % 2 === 1)
    continue
  sum += i;

document.write(`${i} ------ ${sum}<br>`);
}