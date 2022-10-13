let score = prompt("프로그래밍 점수 : ");

if(score != null) {
  score = parseInt(score);
  if (score >= 90) {
    alert("A 학점");
  } else if (score >= 80) {
    alert("B 학점");
  } else {
    alert("C 학점");
  }
}