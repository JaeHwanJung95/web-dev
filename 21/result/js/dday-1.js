let now = new Date();  // 오늘 날짜 정보
let firstDay = new Date("2022-03-23");  // 처음 만난 날의 날짜 정보 

let toNow = now.getTime();  // 오늘 날짜를 밀리초로 바꿉니다.
let toFirst = firstDay.getTime();  // 처음 만난 날을 밀리초로 바꿉니다.
let passedTime = toNow - toFirst;  // 처음 만난 날과 오늘 사이의 차이 (밀리초)

let passedDay = Math.round(passedTime/(1000*60*60*24));  // 밀리초를 일수로 변환
document.querySelector('#accent').innerText = passedDay + "일";  // #accent 영역에 표시