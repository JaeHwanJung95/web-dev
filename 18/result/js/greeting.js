function greeting() {
  let userName = prompt("이름을 입력하세요:");
  let message = `${userName}님, 안녕하세요?`;
  document.write(message);
}

greeting();   