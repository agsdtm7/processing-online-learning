//In the class Cloud
class Cloud{
  int xCloud;
  int yCloud;

// create a constructor of your class
Cloud(int x, int y){
  xCloud = x;
  yCloud = y;
}

// create methods/functions of your class
// CLOUD
void createCloud(){
fill(255);
ellipse(xCloud, yCloud, 50, 50);
ellipse(xCloud + 25, yCloud, 50, 50);
ellipse(xCloud + 50, yCloud, 50, 50);
}


void moveCloud(){
  xCloud++;
}
}


// In the main file
//---------------------
Cloud myCloud1; // this is your Cloud object

int xTower, yTower;

int towerWidth, towerHeight;

int xFan, yFan;
void setup(){
size(500, 500);
noStroke();

xTower = 400;
yTower = 400;

towerWidth = 30;
towerHeight = 150;

myCloud1 = new Cloud(100, 100); // instantiate the Cloud object
}

void draw(){
background(135, 206, 250);
myCloud1.createCloud();
myCloud1.moveCloud();

// GREEN FIELD
fill(34, 139, 34);
rect(0, 350, width, 150);


xFan = xTower + towerWidth/2;
yFan = yTower - towerHeight;

// WINDMILL
// TOWER
fill(150, 100, 50);
triangle(xTower, yTower, xTower + towerWidth, yTower, xTower + towerWidth/2, yTower - towerHeight);

// FAN
xTower--;
fill(150);
triangle(xFan, yFan, xFan - 25 - 5, yFan - 25 + 5, xFan - 25 + 5, yFan - 25 - 5);
triangle(xFan, yFan, xFan + 25 - 5, yFan - 25 - 5, xFan + 25 + 5, yFan - 25 + 5);
triangle(xFan, yFan, xFan + 25 + 5, yFan + 25 - 5, xFan + 25 - 5, yFan + 25 + 5);
triangle(xFan, yFan, xFan - 25 + 5, yFan + 25 + 5, xFan - 25 - 5, yFan + 25 - 5);
}
