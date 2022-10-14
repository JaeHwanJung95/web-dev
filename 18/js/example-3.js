function compareTwo(n1, n2) {
    if (n1 === n2) {
      alert(`${n1}과 ${n2}가 같습니다.`);
    } else if (n1 > n2) {
      alert(`${n1}이(가) ${n2}보다 큽니다.`);
    } else {
      alert(`${n1}이(가) ${n2}보다 작습니다.`);
    }
}

let num1 = parseInt(prompt('비교할 첫 번째 숫자: '));
let num2 = parseInt(prompt('비교할 두 번째 숫자: '));

compareTwo(num1, num2);

