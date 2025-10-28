class Walker {
  
  constructor() {
    this.a = 195;
    this.pos = createVector(random(0,400),0);
    this.vel = createVector(0, 0);
    this.g = createVector(0, 0.1); // 중력
    this.w = 3;
  }
  
  move() {
    // 아주 약한 바람 효과 (좌우로 랜덤하게)
    let wind = random(-0.05, 0.05); 
    
    // 중력 적용
    this.vel.add(this.g);
    // 바람 적용
    //this.vel.x += wind;
    
    let mv = createVector(mouseX,mouseY);
    let nv = p5.Vector.sub(this.pos, mv);
    
    nv.limit(0.045);
    
    this.vel.add(nv);
    
    
    // 위치 업데이트
    this.pos.add(this.vel);
  }
  
  bb() {
    if(this.pos.y >= height) {
      this.vel.y *= -0.4;
    }
  }
  
  show() {
    noStroke();
    fill(255,215,0,this.a);
    ellipse(this.pos.x, this.pos.y, this.w, 7);
  }
}
