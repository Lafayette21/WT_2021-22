var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
 context.strokeStyle = "#ddd";
 
for (var x = 0.5; x < 600; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 400);
}
for (var y = 0.5; y < 400; y += 10) {
  context.moveTo(0, y);
  context.lineTo(600, y);
}
context.stroke();

context.beginPath();
context.moveTo(0, 360);
context.lineTo(240, 360);
context.moveTo(260, 360);
context.lineTo(500, 360);
context.moveTo(495, 340);
context.lineTo(500, 360);
context.lineTo(495, 380);
  
context.moveTo(40, 40);
context.lineTo(40, 260);
context.moveTo(40, 280);
context.lineTo(40, 400);

context.moveTo(40, 40);
context.lineTo(50, 50);
context.moveTo(40,40);
context.lineTo(30, 50);
  
context.strokeStyle = "#00A";
context.stroke();

context.font = "bold 12px sans-serif";
context.fillText("x", 36, 274);
context.fillText("y", 247, 360);


context.moveTo(360,20);
context.lineTo(100,400);
context.stroke();

context.font="bold 14px calibri";
context.fillText("y = 1.83x -1.5",250,200);

