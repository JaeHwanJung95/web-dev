const range = document.querySelector("#user-input");
const output = document.querySelector("#output");

range.oninput = function () {
  output.innerText = range.value;
};
