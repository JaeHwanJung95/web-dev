let today = new Date();
let xmas = new Date("2022-12-25");
let diff = xmas.getTime() - today.getTime();

let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
document.querySelector("p > span").innerText = days;