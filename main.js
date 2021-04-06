canvas = document.getElementById("myCanvas");


ctx= canvas.getContext("2d");

ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.linewidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.linewidth = 5;
ctx.arc(250, 210, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "black";
ctx.linewidth = 5;
ctx.arc(305, 210, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "red";
ctx.linewidth = 5;
ctx.arc(360, 210, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "yellow";
ctx.linewidth = 5;
ctx.arc(277, 290, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "green";
ctx.linewidth = 5;
ctx.arc(332, 290, 40, 0, 2* Math.PI);
ctx.stroke();




