int xCloud = 100;
int yCloud = 100;

boolean rain = true;

int xTower = 400;
int yTower = 400;

int towerWidth = 30;
int towerHeight = 150;

int xFan = xTower + towerWidth/2;
int yFan = yTower - towerHeight;

float angle = 0;
void setup(){
// https://processing.org/reference/setup_.html
size(500, 500);
noStroke();
}

void draw(){
// https://processing.org/reference/draw_.html
background(135, 206, 250);

// xCloud = xCloud + 1;
//if(xCloud - 25 == width){
//  xCloud = -75;
//}else{
//  xCloud++;
//}

// MOVING CLOUD
xCloud++;
if(xCloud > 500){
  xCloud = 0;
  rain = !rain; // change into the opposite value
}

// RAIN ANIMATION WITH RANDOM
if(rain){
background(180);
stroke(0); // black stroke
strokeWeight(5);
int xrain, yrain;
xrain = int(random(width));
yrain = int(random(height));
line(xrain, yrain, xrain + 8, yrain + 8);
}

// GREEN FIELD
noStroke();
fill(34, 139, 34);
rect(0, 350, width, 150);

// CLOUD
fill(255);
ellipse(xCloud, yCloud, 50, 50);
ellipse(xCloud + 25, yCloud, 50, 50);
ellipse(xCloud + 50, yCloud, 50, 50);

// WINDMILL
// TOWER
triangle(xTower, yTower, xTower + towerWidth, yTower, xTower + towerWidth/2, yTower - towerHeight);

// pushMatrix, translate, rotate, popMatrix
// https://processing.org/reference/pushMatrix_.html
// https://processing.org/reference/translate_.html
// https://processing.org/reference/rotate_.html
// https://processing.org/reference/popMatrix_.html

pushMatrix();
translate(xFan, yFan);
rotate(radians(angle);
// FAN
fill(150);
triangle(0, 0, 0 - 25 - 5, 0 - 25 + 5, 0 - 25 + 5, 0 - 25 - 5);
triangle(0, 0, 0 + 25 - 5, 0 - 25 - 5, 0 + 25 + 5, 0 - 25 + 5);
triangle(0, 0, 0 + 25 + 5, 0 + 25 - 5, 0 + 25 - 5, 0 + 25 + 5);
triangle(0, 0, 0 - 25 + 5, 0 + 25 + 5, 0 - 25 - 5, 0 + 25 - 5);
popMatrix();
angle = angle+5; // angle++; this is a shortcut

}
