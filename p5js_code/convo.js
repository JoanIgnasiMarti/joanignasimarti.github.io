let caja = 32;
let factor = 0.6;
curX = 0;
curY = 0;
function setup(){
  let wid = int(windowWidth*factor/caja)*caja;
  let hei = int(windowHeight*factor/caja)*caja;
  createCanvas(wid, hei);
};
function draw(){
  let kpr = 0;
  if (keyIsPressed){
    console.log(keyCode);
    kpr = keyCode
  }
  if (kpr == 37 && curX>0){
    curX--;
  }
  else if(kpr == 38 && curY>0){
    curY--;
  }
  else if(kpr == 39 && curX < int(displayWidth/caja)){
    curX++;
  }
  else if(kpr == 40 && curY < int(displayHeight/caja)){
    curY++;
  }
  background(0);
  for (let i=0;i<int(displayWidth/caja);i++){
    for (let j=0;j<int(displayHeight/caja);j++){
      stroke(125);
      fill(0);
      if (i==curX && j==curY){
        noStroke();
        fill(255);
      }
      rect(i*caja,j*caja,caja,caja,caja/3);
    };
  };
  noStroke;
  fill(255,0,0);
  ellipse(mouseX, mouseY,10,10);
};
