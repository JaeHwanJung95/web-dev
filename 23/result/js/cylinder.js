// 생성자 함수 사용

// function Cylinder (cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter;
//   this.height = cylinderHeight;

//   this.getVolume() = function() {
//     let radius = this.diameter / 2;      // 반지름을 계산합니다.
//     return (Math.PI * radius * radius * this.height).toFixed(2);    // 부피를 계산한 후 반환합니다.
//   };
// }


// 클래스 사용
class Cylinder {
  constructor(cyl_diameter, cyl_height) {
    this.diameter = cyl_diameter;
    this.height = cyl_height;
  }
  volume() {
    let radius = this.diameter / 2; // 반지름 계산하기
    return (Math.PI * radius * radius * this.height).toFixed(2); // 부피 계산해서 반환
  }
}

const button = document.querySelector("button");   // [계산하기] 버튼 
const result = document.querySelector("#result");   // 결괏값 표시 영역

button.addEventListener("click", function(event) {
  event.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;   // 지름값 
  const height = document.querySelector("#cyl-height").value;        // 높잇값

  if(diameter === "" || height === "") {
    result.innerText = `지름값과 높잇값을 입력하세요.`;
  }
  else {    
    let cylinder = new Cylinder(parseInt(diameter), parseInt(height));    // 인스턴스 생성
    result.innerText = `원기둥의 부피는 ${cylinder.volume()}입니다.`;    // 부피 계산해서 result 영역에 표시
  }
});
