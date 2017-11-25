function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0,20);
  
  for(var x=10; x<=500; x+=50) {
    for(var y=20; y<=500; y+=50) {
      
      push();
      translate(x,y);
      rotate(frameCount/20);
      fill('red');
      noStroke();
      rect(10,20,10,10);
      pop();
    }
  }
  
  for(var x=30; x<=500; x+=50) {
    for(var y=50; y<=500; y+=50) {
      
      push();
      translate(x,y);
      rotate(-frameCount/20);
      fill('blue');
      noStroke();
      rect(-20,20,10,10);
      pop();
    }
  }
}