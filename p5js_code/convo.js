console.log("testing");
let caja = 32;
let factor = 0.6;
function setup(){
  log("should work");
  let wid = int(windowWidth*factor/caja)*caja;
  let hei = int(windowHeight*factor/caja)*caja;
  createCanvas(wid, hei);
};
function draw(){
  log("Why not?");
  background(0);
  fill(255);
  ellipse(mouseX, mouseY,10,10);
};
