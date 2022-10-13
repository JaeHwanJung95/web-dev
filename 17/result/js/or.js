let currentTime = 10;  /* 시각을 24시간 단위로 지정 */

if (currentTime < 9 || currentTime > 18) {  /* 9시 이전이거나 18시 이후라면 */
  alert("현재 영업 시간이 아닙니다.");
} else {
  alert("현재 영업 중입니다.")
}