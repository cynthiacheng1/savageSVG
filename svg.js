var shape = document.getElementById("svgID");
var x1 = -1;
var y1 = -1;
var draw = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 15);
    circle.setAttribute("fill", "red");
    circle.setAttribute("stroke", "black");
    shape.appendChild(circle);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (x1 != -1 && y1 != -1){
	line.setAttribute("x1",x1);
	line.setAttribute("y1",y1);
	line.setAttribute("x2",x);
	line.setAttribute("y2",y);
	line.setAttribute("stroke","black");
	shape.appendChild(line);
    }
    x1 = x;
    y1 = y;
}

var clearB = document.getElementById("clear");

var clear = function() {
  shape.innerHTML = "";
}

shape.addEventListener("click", draw);
clearB.addEventListener("click", clear);
