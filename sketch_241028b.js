function setup() {
  createCanvas(400, 400);
  
  background(220);
}

function draw() {
  
  let d1 = color(230,230,250);
  // Bottom-right. 1st column
  fill(d1);
  stroke(1);
  arc(50, 55, 50, 50, 0, HALF_PI);
  noStroke();
  arc(50, 155, 50, 50, 0, HALF_PI);
  stroke(1);
  arc(50, 255, 50, 50, 0, HALF_PI);
  noStroke();
  arc(50, 355, 50, 50, 0, HALF_PI);
  fill(color(230,0,250));
  //Bottom-right. 2nd column
  arc(150, 55, 50, 50, 0, HALF_PI);
  stroke(1);
  arc(150, 155, 50, 50, 0, HALF_PI);
  noStroke();
  arc(150, 255, 50, 50, 0, HALF_PI);
  stroke(1);
  arc(150, 355, 50, 50, 0, HALF_PI);
  fill(color(230,0,102));
  //Bottom-right. 3rd column
  arc(250, 55, 50, 50, 0, HALF_PI);
  noStroke();
  arc(250, 155, 50, 50, 0, HALF_PI);
  stroke(1);
  arc(250, 255, 50, 50, 0, HALF_PI);
  noStroke();
  arc(250, 355, 50, 50, 0, HALF_PI);
  fill(color(51,0,102));
  //Bottom-right. 4th column
  arc(350, 55, 50, 50, 0, HALF_PI);
  stroke(1);
  arc(350, 155, 50, 50, 0, HALF_PI);
  noStroke();
  arc(350, 255, 50, 50, 0, HALF_PI);
  stroke(1);
  arc(350, 355, 50, 50, 0, HALF_PI);
  noFill();

  // Bottom-left. 1st column
  strokeWeight(1);
  arc(50, 55, 60, 60, HALF_PI, PI);//x,y,w,h
  strokeWeight(2);
  arc(50, 155, 60, 60, HALF_PI, PI);
  strokeWeight(1);
  arc(50, 255, 60, 60, HALF_PI, PI);
  strokeWeight(2);
  arc(50, 355, 60, 60, HALF_PI, PI);
// Bottom-left. 2nd column
  arc(150, 55, 60, 60, HALF_PI, PI);//x,y,w,h
  strokeWeight(1);
  arc(150, 155, 60, 60, HALF_PI, PI);
  strokeWeight(2);
  arc(150, 255, 60, 60, HALF_PI, PI);
  strokeWeight(1);
  arc(150, 355, 60, 60, HALF_PI, PI);
  // Bottom-left. 3rd column
  arc(250, 55, 60, 60, HALF_PI, PI);//x,y,w,h
  strokeWeight(2);
  arc(250, 155, 60, 60, HALF_PI, PI);
  strokeWeight(1);
  arc(250, 255, 60, 60, HALF_PI, PI);
  strokeWeight(2);
  arc(250, 355, 60, 60, HALF_PI, PI);
  // Bottom-left. 4th column
  arc(350, 55, 60, 60, HALF_PI, PI);//x,y,w,h
  strokeWeight(1);
  arc(350, 155, 60, 60, HALF_PI, PI);
  strokeWeight(2);
  arc(350, 255, 60, 60, HALF_PI, PI);
  strokeWeight(1);
  arc(350, 355, 60, 60, HALF_PI, PI);
  
  // Top-left. 1st
  stroke(color(230,230,250));
  strokeWeight(2);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(3);
  arc(50, 155, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(2);
  arc(50, 255, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(3);
  arc(50, 355, 70, 70, PI, PI + QUARTER_PI);
  // Top-left. 2nd
  stroke(color(230,0,250));
  arc(150, 55, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(2);
  arc(150, 155, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(3);
  arc(150, 255, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(2);
  arc(150, 355, 70, 70, PI, PI + QUARTER_PI);
  // Top-left. 3rd
  stroke(color(230,0,102));
  arc(250, 55, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(3);
  arc(250, 155, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(2);
  arc(250, 255, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(3);
  arc(250, 355, 70, 70, PI, PI + QUARTER_PI);
  // Top-left. 4th
  stroke(color(51,0,102));
  arc(350, 55, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(2);
  arc(350, 155, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(3);
  arc(350, 255, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(2);
  arc(350, 355, 70, 70, PI, PI + QUARTER_PI);
  strokeWeight(1);
  stroke('black');

  // Top-right. 1st
  //stroke(0);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(50, 155, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(50, 255, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(50, 355, 80, 80, PI + QUARTER_PI, TWO_PI);
  // Top-right. 2nd
  arc(150, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(150, 155, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(150, 255, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(150, 355, 80, 80, PI + QUARTER_PI, TWO_PI);
  // Top-right. 3rd
  arc(250, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(250, 155, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(250, 255, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(250, 355, 80, 80, PI + QUARTER_PI, TWO_PI);
  // Top-right. 4th
  arc(350, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(350, 155, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(350, 255, 80, 80, PI + QUARTER_PI, TWO_PI);
  arc(350, 355, 80, 80, PI + QUARTER_PI, TWO_PI);
  
  
  let c1 = color(132, 86, 60);
  fill(c1);
  noStroke();
   ellipse(200,200,100);
  //  head circle
  ellipse(150,180,20);
  // nose circle
  ellipse(150,216,12);
  ellipse(150,206,11);
  rect(180,230,30);
  
  fill(color(255));
  ellipse(180,180,20)
  
  let c2 = color(0);
  fill(c2);
  ellipse(207,145,20);//x,y,size
  ellipse(227,150,20);
  ellipse(245,161,20);
  ellipse(255,180,20);
  ellipse(260,200,20);
  ellipse(255,220,20);
  ellipse(260,240,20);
  ellipse(278,250,20);
  
  ellipse(210,160,20);
  ellipse(228,170,20);
  ellipse(240,183,20);
  ellipse(242,202,20);
  ellipse(240,220,20);
  ellipse(240,240,20);
  ellipse(252,257,20);
  
  
  ellipse(213,180,20);
  ellipse(223,195,20);
  ellipse(223,215,20);
  ellipse(220,235,20);
  ellipse(227,254,20);
  ellipse(240,270,20);
  ellipse(270,265,20);
  ellipse(257,280,20) ;
  
  
  
  fill(color(139, 69, 19));
  ellipse(175,175,10);
  
  fill(color(0));
  ellipse(175,175,5);
  
  rect(170, 255, 55, 140, 20);
  ellipse(180,300,50);
}
