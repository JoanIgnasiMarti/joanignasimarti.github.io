log("testing");
let caja = 32;
function setup(){
  log("should work");
  let wid = int(windowWidth*0.8/caja)*caja;
  let hei = int(windowHeight*0.8/caja)*caja;
  createCanvas(windowWidth*0.8, windowHeight*0.8);
};
function draw(){
  log("Why not?");
  background(0);
  fill(255);
  ellipse(mouseX, mouseY,10,10);
};
