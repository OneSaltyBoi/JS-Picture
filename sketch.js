function setup() {
    createCanvas(800, 800);
}


function draw() {
    noStroke();
    background(0, 200, 255);
    fill(0, 200, 0);
  rect(-1, 550, 801, 300);
    noStroke();
    fill(250, 250, 0);
    ellipse(600, 100, 80,80);
    fill(255, 255, 255);
    for (i=0; i <= 20; i++) {
            offset = 45 * i
            ellipse(1+offset, 10, 75, 60)
            stroke(225, 225, 225);
            ellipse(1+offset, 50, 75, 60)
    } 
    for (i=0; i <= 20; i++) {
            offset = 60 * i
            ellipse(1+offset, 60, 75, 60)
    }
    noStroke();
    fill(0, 150, 0);
     for (i=0; i<= 15; i++) {
         offset = 50 * i
             fill(0, 150, 0);
        triangle(30+offset, 550, 40+offset, 475, 50+offset, 550);
        triangle(28+offset, 540, 40+offset, 465, 52+offset, 540);
        fill(139, 69, 19)
        rect(35+offset, 550, 10, 10);
        fill(0, 0, 0);
        text("-v-", 500, 300)
        text("-v-", 600, 200)
        text("-v-", 700, 400)
        text("-v-", 100, 250)
        text("-v-", 300, 400)
        text("-v-", 200, 270)
        text("-v-", 400, 250)
      } 
}

    
