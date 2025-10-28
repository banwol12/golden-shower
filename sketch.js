let rains = [];


function setup() {
  createCanvas(400, 400); 
}


function draw() {
  background(0);
  
  if (frameCount % 2 === 0) {
    rains.push(new Walker());
  }
  
  for (let r of rains) {
    r.move();
    r.bb();
    r.show();
  }
}