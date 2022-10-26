const canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 400;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.strokeStyle = "red";

ctx.shadowColor = "blue";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;

ctx.font = "bold 160px Caveat";
ctx.fillText("Kyunghee Ko", 80, 200);
ctx.strokeText("Kyunghee Ko", 80, 200);

