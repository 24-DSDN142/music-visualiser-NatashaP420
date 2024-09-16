let img;
let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  background(22, 11, 59)//indigo
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;


   stroke(29, 13, 69);
   fill(29, 13, 69);
   let dimSphere = map(other, 0, 100, 250, 350);
   ellipse(300, 300, dimSphere, dimSphere);

   stroke(33, 15, 77);
   fill(33, 15, 77);
   let dimSphereGlow = map(other, 0, 100, 200, 300);
   ellipse(300, 300, dimSphereGlow, dimSphereGlow);

   stroke(29, 13, 69);
   fill(29, 13, 69);
   let dimSphere2 = map(other, 0, 100, 250, 400);
   ellipse(250, 900, dimSphere2, dimSphere2);

   stroke(33, 15, 77);
   fill(33, 15, 77);
   let dimSphere2Glow = map(other, 0, 100, 200, 350);
   ellipse(250, 900, dimSphere2Glow, dimSphere2Glow);


   stroke(48, 20, 97);
   fill(48, 20, 97);
   let ringSize = map(drum, 0, 100, 500, 700);
   ellipse(70, 70, ringSize, ringSize);

   stroke(22, 11, 59);//indigo
   fill(22, 11, 59);//indigo
   let ringSpace = map(drum, 0, 100, 450, 650);
   ellipse(70, 70, ringSpace, ringSpace);

   stroke(48, 20, 97);
   fill(48, 20, 97);
   let ringSize2 = map(drum, 0, 100, 380, 580);
   ellipse(70, 70, ringSize2, ringSize2);

   stroke(22, 11, 59);//indigo
   fill(22, 11, 59);//indigo
   let ringSpace2 = map(drum, 0, 100, 320, 520);
   ellipse(70, 70, ringSpace2, ringSpace2);

   stroke(48, 20, 97);//deep purple
   fill(48, 20, 97);//deep purple
   let backShape = map(other, 0, 100, 200, 350);
   ellipse(690, 690, backShape, backShape);

   stroke(22, 11, 59);
   fill(22, 11, 59);
   let backShapeGlow = map(other, 0, 100, 100, 300);
   ellipse(690, 690, backShapeGlow, backShapeGlow);

   stroke(32, 17, 130);//indigo2
   fill(32, 17, 130);//indigo2
   let backShape2 = map(bass, 0, 100, 100, 200);
   ellipse(840, 580, backShape2, backShape2);

   stroke(44, 23, 179);
   fill(44, 23, 179);
   let backShape2Glow = map(bass, 0, 100, 70, 150);
   ellipse(840, 580, backShape2Glow, backShape2Glow);

   stroke(115, 147, 255);
   fill(115, 147, 255);
   let bubbleSize3 = map(other, 0, 100, 40, 100);
   ellipse(790, 100, bubbleSize3, bubbleSize3);

   stroke(148, 173, 255);
   fill(148, 173, 255);
   let bubbleGlow3 = map(other, 0, 100, 30, 75);
   ellipse(790, 100, bubbleGlow3, bubbleGlow3);

   stroke(84, 33, 150);//greyish purple
   fill(84, 33, 150);//greyish purple
   let bubbleSize4 = map(drum, 0, 100, 200, 450);
   ellipse(900, 800, bubbleSize4, bubbleSize4);

   stroke(110, 49, 189);//lilac
   fill(110, 49, 189);//lilac
   let bubbleGlow4 = map(drum, 0, 100, 100, 380);
   ellipse(900, 800, bubbleGlow4, bubbleGlow4);
 
  stroke(32, 17, 130);//indigo2
  fill(32, 17, 130);//indigo2
  let bubbleSize = map(bass, 0, 100, 60, 350)
  ellipse(650, 200, bubbleSize, bubbleSize);

  stroke(44, 23, 179);
  fill(44, 23, 179);
  let bubbleGlow = map(bass, 0, 100, 40, 250)
  ellipse(650, 200, bubbleGlow, bubbleGlow);

  stroke(44, 23, 179);
  fill(44, 23, 179);
  let bubbleSize2 = map(bass, 0, 100, 50, 200)
  ellipse(800, 300, bubbleSize2, bubbleSize2);

  stroke(51, 27, 207);
  fill(51, 27, 207);
  let bubbleGlow2 = map(bass, 0, 100, 40, 150)
  ellipse(800, 300, bubbleGlow2, bubbleGlow2);

  stroke(32, 17, 130);
  fill(32, 17, 130);
  let bubbleSize5 = map(bass, 0, 100, 100, 250);
  ellipse(200, 720, bubbleSize5, bubbleSize5);

  stroke(44, 23, 179);
  fill(44, 23, 179);
  let bubbleGlow5 = map(bass, 0, 100, 80, 200);
  ellipse(200, 720, bubbleGlow5, bubbleGlow5);

  stroke(44, 23, 179);
  fill(44, 23, 179);
  let bubbleSize6 = map(bass, 0, 100, 80, 150);
  ellipse(120, 550, bubbleSize6, bubbleSize6);

  stroke(51, 27, 207);
  fill(51, 27, 207);
  let bubbleGlow6 = map(bass, 0, 100, 60, 100);
  ellipse(120, 550, bubbleGlow6, bubbleGlow6);

  stroke(115, 147, 255);
  fill(115, 147, 255);
  let lightOrbSize = map(vocal, 0, 100, 40, 200);
  ellipse(80, 800, lightOrbSize, lightOrbSize);

  stroke(148, 173, 255);
  fill(148, 173, 255);
  let lightOrbGlow = map(vocal, 0, 100, 30, 150);
  ellipse(80, 800, lightOrbGlow, lightOrbGlow);

  stroke(115, 147, 255);
  fill(115, 147, 255);
  let lightOrb2Size = map(vocal, 0, 100, 100, 250);
  ellipse(600, 850, lightOrb2Size, lightOrb2Size);

  stroke(148, 173, 255);
  fill(148, 173, 255);
  let lightOrb2Glow = map(vocal, 0, 100, 80, 200);
  ellipse(600, 850, lightOrb2Glow, lightOrb2Glow);


  var lengthOfLine = 250;
  var lineStart = 480;
  var lineEnd = lengthOfLine + lineStart;
  stroke(79, 97, 255); //cobalt
  strokeWeight(9);
  line(lineStart, 480, lineEnd, 480);

  strokeWeight(9);
let lineSize=40 

for(i = 0; i < 8; i++){
push();
translate(width/2, height/2);
rotate(360/12 * i);
line(0, -300, 0, 300);

pop();
}

fill(255, 50);
stroke(drum, 80, 80, 50);
noStroke()
if(bass > 70){
for(let i = 0; i < 5; i = i + 1){
ellipse(80, 80, 60*i)
}

for(let i = 0; i < 5; i = i + 1){
  ellipse(480, 480, 125*i)
}

for(let i = 0; i < 5; i = i + 1){
  ellipse(850, 130, 60*i)
}

for(let i = 0; i < 5; i = i + 1){
  ellipse(760, 930, 80*i)
}

}

  fill(79, 97, 255); //cobalt
  stroke(79, 97, 255);
  let starSize = map(drum, 0, 100, 60, 250)
  ellipse(480, 480, starSize, starSize);

  fill(128, 153, 255); //dusty blue
  stroke(128, 153, 255);
  let starGlow = map(drum, 0, 100, 40, 150)
  ellipse(480, 480, starGlow, starGlow);

  fill(176, 200, 255); //baby blue
  stroke(176, 200, 255);
  let starCentre = map(drum, 0, 100, 20, 100)
  ellipse(480, 480, starCentre, starCentre);

  stroke(3, 165, 252);//cyan
  fill(3, 165, 252);//cyan
  let speckleSize = map(drum, 0, 100, 30, 60);
  ellipse(480, 880, speckleSize, speckleSize);

  stroke(94, 199, 255);
  fill(94, 199, 255);
  let speckleGlow = map(drum, 0, 100, 15, 45);
  ellipse(480, 880, speckleGlow, speckleGlow);

  stroke(173, 227, 255);
  fill(173, 227, 255);
  let speckleCentre = map(drum, 0, 100, 5, 35);
  ellipse(480, 880, speckleCentre, speckleCentre);

  stroke(3, 165, 252);//cyan
  fill(3, 165, 252);//cyan
  let speckleSize2 = map(drum, 0, 100, 60, 100);
  ellipse(400, 60, speckleSize2, speckleSize2);

  stroke(94, 199, 255);
  fill(94, 199, 255);
  let speckleGlow2 = map(drum, 0, 100, 40, 80);
  ellipse(400, 60, speckleGlow2, speckleGlow2);

  stroke(173, 227, 255);
  fill(173, 227, 255);
  let speckleCentre2 = map(drum, 0, 100, 20, 60);
  ellipse(400, 60, speckleCentre2, speckleCentre2);

  if(firstRun){
    img = loadImage('star.png')
    firstRun = false
   }

  if(bass > 70){
    push()
    translate(0)
    rotate(0)
    scale(0.25)
    image(img, 2900, 1000);//star.png
    pop()
  }

  if(bass > 70){
  push()
  translate(0)
  rotate(0)
  scale(0.25)
  image(img, 30, 90);//star.png
  pop()
  }
  
 if(bass > 70){
 push()
 translate(0)
 rotate(0)
 scale(0.5)
 image(img, 100, 1200);//star.png
 pop()
 }

  stroke(0, 200, 255);//cyan
  fill(0, 200, 255);//cyan
  let speckleSize3 = map(vocal, 0, 100, 30, 45);
  ellipse(500, 100, speckleSize3, speckleSize3);

  stroke(0, 200, 255);//cyan
  fill(0, 200, 255);//cyan
  let speckleSize4 = map(vocal, 0, 100, 15, 25);
  ellipse(450, 130, speckleSize4, speckleSize4);

  stroke(0, 200, 255);//cyan
  fill(0, 200, 255);//cyan
  let speckleSize5 = map(vocal, 0, 100, 15, 30);
  ellipse(420, 730, speckleSize5, speckleSize5);
}

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);
