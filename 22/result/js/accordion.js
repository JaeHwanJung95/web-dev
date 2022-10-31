let buttons = document.querySelectorAll(".coll-btn");

for (let button of buttons) {
  button.addEventListener("click", function () {
    // 버튼의 스타일을 active 로 설정
    this.classList.toggle("active");

    // 버튼의 다음 요소, 즉 패널을 펼침
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
