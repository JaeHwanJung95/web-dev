const canvas = document.querySelector('canvas');
canvas.width = 400;
canvas.height = 300;

const ctx = canvas.getContext("2d");    

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 50, 100);