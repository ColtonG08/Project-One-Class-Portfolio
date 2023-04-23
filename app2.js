function setup(){
    // Happens only once
    myCanvas = createCanvas(1000, 1000);
    myCanvas.parent('myContainer');
}


let bug1; // Declare objects
let bug2;
let bug3;
let bug4;
let bug5;
let bug6;
let bug7;
let bug8;
let bug9;
let bug10;
let bug11;
let bug12;
let bug13;
let bug14;
let bug15;
let bug16;
let bug17;
let bug18;
let bug19;
let bug20;
let bug21;
let bug22;
let bug23;
let bug24;
let bug25;
let bug26;
let bug27;
let bug28;
let bug29;
let bug30;

function setup() {
  createCanvas(1000, 800);
  // Create object
  bug1 = new Jitter();
  bug2 = new Jitter();
  bug3 = new Jitter();
  bug4 = new Jitter();
  bug5 = new Jitter();
  bug6 = new Jitter();
  bug7 = new Jitter();
  bug8 = new Jitter();
  bug9 = new Jitter();
  bug10 = new Jitter();
  bug11 = new Jitter();
  bug12 = new Jitter();
  bug13 = new Jitter();
  bug14 = new Jitter();
  bug15 = new Jitter();
  bug16 = new Jitter();
  bug17 = new Jitter();
  bug18 = new Jitter();
  bug19 = new Jitter();
  bug20 = new Jitter();
  bug21 = new Jitter();
  bug22 = new Jitter();
  bug23 = new Jitter();
  bug24 = new Jitter();
  bug25 = new Jitter();
  bug26 = new Jitter();
  bug27 = new Jitter();
  bug28 = new Jitter();
  bug29 = new Jitter();
  bug30 = new Jitter();
  bug31 = new Jitter();
  bug32 = new Jitter();
  bug33 = new Jitter();
  bug34 = new Jitter();
  bug35 = new Jitter();
  bug36 = new Jitter();
  bug37 = new Jitter();
  bug38 = new Jitter();
  bug39 = new Jitter();
  bug40 = new Jitter();
  bug41 = new Jitter();
  bug42 = new Jitter();
  bug43 = new Jitter();
  bug44 = new Jitter();
  bug45 = new Jitter();
  bug46 = new Jitter();
  bug47 = new Jitter();
  bug48 = new Jitter();
  bug49 = new Jitter();
  bug50 = new Jitter();
  bug51 = new Jitter();
  bug52 = new Jitter();
  bug53 = new Jitter();
  bug54 = new Jitter();
  bug55 = new Jitter();
  bug56 = new Jitter();
  bug57 = new Jitter();
  bug58 = new Jitter();
  bug59 = new Jitter();
  bug60 = new Jitter();
  
}

function draw() {
  background(88, 70, 50);
  // Draw a rectangle with rounded corners, each having a radius of 20.
rect(100, 100, 800, 600, 20, 20);
fill(217, 75, 37);
stroke(88, 70, 50);
describe(
  'white rect with black outline and round edges in mid-right of canvas'
);
  
  for (let i = 0; i < 1000; i++) {
    let r = random(-500, 500);
    line(500, i, 500 + r, i);
  }
  describe(`100 horizontal lines from center of canvas.
    The height & side change each render.`);
  bug1.move();
  bug1.display();
  bug2.move();
  bug2.display();
  bug3.move();
  bug3.display();
  bug4.move();
  bug4.display();
  bug5.move();
  bug5.display();
  bug6.move();
  bug6.display();
  bug7.move();
  bug7.display();
  bug8.move();
  bug8.display();
  bug9.move();
  bug9.display();
  bug10.move();
  bug10.display();
  fill(241, 156, 51);
    bug11.move();
    bug11.display();
    bug12.move();
    bug12.display();
    bug13.move();
    bug13.display();
    bug14.move();
    bug14.display();
    bug15.move();
    bug15.display();
    bug16.move();
    bug16.display();
    bug17.move();
    bug17.display();
    bug18.move();
    bug18.display();
    bug19.move();
    bug19.display();
    bug20.move();
    bug20.display();
    fill(19, 140, 130);
    bug21.move();
    bug21.display();
    bug22.move();
    bug22.display();
    bug23.move();
    bug23.display();
    bug24.move();
    bug24.display();
    bug25.move();
    bug25.display();
    bug26.move();
    bug26.display();
    bug27.move();
    bug27.display();
    bug28.move();
    bug28.display();
    bug29.move();
    bug29.display();
    bug30.move();
    bug30.display();
    fill(217, 75, 37);
    bug31.move();
    bug31.display();
    bug32.move();
    bug32.display();
    bug33.move();
    bug33.display();
    bug34.move();
    bug34.display();
    bug35.move();
    bug35.display();
    bug36.move();
    bug36.display();
    bug37.move();
    bug37.display();
    bug38.move();
    bug38.display();
    bug39.move();
    bug39.display();
    bug40.move();
    bug40.display();
  fill(241, 156, 51);
    bug41.move();
    bug41.display();
    bug42.move();
    bug42.display();
    bug43.move();
    bug43.display();
    bug44.move();
    bug44.display();
    bug45.move();
    bug45.display();
    bug46.move();
    bug46.display();
    bug47.move();
    bug47.display();
    bug48.move();
    bug48.display();
    bug49.move();
    bug49.display();
    bug50.move();
    bug50.display();
    fill(19, 140, 130);
    bug51.move();
    bug51.display();
    bug52.move();
    bug52.display();
    bug53.move();
    bug53.display();
    bug54.move();
    bug54.display();
    bug55.move();
    bug55.display();
    bug56.move();
    bug56.display();
    bug57.move();
    bug57.display();
    bug58.move();
    bug58.display();
    bug59.move();
    bug59.display();
    bug60.move();
    bug60.display();
    fill(240, 238, 205);
  }

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
