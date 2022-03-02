canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var colour ="black";
var radius = 5;
var line_width = 1;
var mouseEvent;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
  colour = document.getElementById("colour").value;
  line_width = document.getElementById("line_width").value;
  radius = document.getElementById("radius").value;
  mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  current_mouse_y = e.clientY - canvas.offsetTop;
  current_mouse_x = e.clientX - canvas.offsetLeft;
  if(mouseEvent == "mousedown"){
    console.log("Current X and Y-")
    console.log("X = " + current_mouse_x + "Y = "+ current_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = line_width;
    ctx.arc(current_mouse_x,current_mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
  }
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouseEvent ="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouseEvent = "mouseleave";
}
