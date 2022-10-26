const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 150, 150);
ctx.fillStyle = 'rgb(0, 0, 200)';
ctx.fillRect(160, 10, 150, 150);
ctx.fillStyle = 'rgb(0, 200, 0)';
ctx.fillRect(160, 160, 150, 150);
ctx.fillStyle = 'rgb(255, 255, 0)';
ctx.fillRect(10, 160, 150, 150);

ctx.globalAlpha = 0.4;
ctx.beginPath();
ctx.arc(160, 160, 100, 0, Math.PI * 2);
ctx.fillStyle = '#fff';
ctx.fill();
ctx.beginPath();
ctx.arc(160, 160, 60, 0, Math.PI * 2);
ctx.fillStyle = '#00f';
ctx.fill();
