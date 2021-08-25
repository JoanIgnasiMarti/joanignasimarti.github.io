log("testing");
function setup(){
  log("should work");
  createCanvas(windowWidth, windowHeight);
};
function draw(){
  log("Why not?");
  background(0);
  fill(255);
  ellipse(mouseX, mouseY,10,10);
};
