var a, b, c, context, w, h, k=10;


function init() {
  canvas= document.getElementById("mycanvas");
  context = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context');
  grid();
}  // close init

function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  console.log(a,b,c);
  results();
  solutions();
}  // close QF

function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  $("#vertex").text("Vertex is at (" + vX+","+vY+")");
}  // close results()
 

function solutions() {
  // qudratic formula
  $("#answers").hide();
  $("#answers").fadeIn(1500);
  d = Math.pow(b*1,2)-4*a*c;
  if (d<0) {
    $("#solution1").text("The solutions are imaginary (no x-intercepts).");
  }
  else {
  // the quadratic formula needs to be typed below assiging x1 and x2
  x1=-b/(2*a)+((b**2-4*a*c)**.5) /(2*a);
  x2=-b/(2*a)-((b**2-4*a*c)**.5)/(2*a);
  $("#solution1").text("x = " + x1);
  $("#solution2").text("x = " + x2);

  }

} // close sol

function grid(){

  // thin line with a 40% opacity using rgba() 
context.lineWidth=1;
context.strokeStyle="rgba(0,0,0,.4)";

//using the direct variation constant, k
//  here are the vertical and horizontal lines
for (  i=0;i<h/(2*k); i++ ) {
  context.beginPath();
  context.moveTo( 0, h/2-i*k );
  context.lineTo( w,h/2-i*k );
  context.stroke();
  context.beginPath();
  context.moveTo( 0, h/2+i*k );
  context.lineTo( w,h/2+i*k );
  context.stroke();
}
for ( i=0; i< w/(2*k); i++ ) {
  context.beginPath();
  context.moveTo(w/2+i*k,0);
  context.lineTo(w/2+i*k,h );
  context.stroke();
  context.beginPath();
  context.moveTo(w/2-i*k,0);
  context.lineTo(w/2-i*k,h );
  context.stroke();
}

context.lineWidth = 3;
context.beginPath();
context.moveTo(w/2, 10);
context.lineTo(w/2, h-10)
context.beginPath();
context.moveTo(10, h/2);
context.lineTo(w-10, h/2)
context.stroke();

}  // close grid
function graphQuad () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    y = c*1+b*x+a*Math.pow(x,2);
    nx =  (w/2 - (i + 1))/k;
    ny = c*1+b*nx+a*Math.pow(nx,2); 
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "Black";
    context.moveTo(w/2+x*k, h/2-y*k);
    context.lineTo(w/2+nx*k, h/2-y*k);
    context.stroke();
  }
}