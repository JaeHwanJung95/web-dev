let students = ["Kim", "Lee", "Park"];
// console.log(`현재 students: ${students}`);

localStorage.setItem("students", JSON.stringify(students));

// "Choi" 추가하기
let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
  // console.log(localData);
}

localData.push("Choi");
localStorage.setItem("students", JSON.stringify(localData));
