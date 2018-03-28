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

void createLongerCloud(){
fill(255);
ellipse(xCloud, yCloud, 50, 50);
ellipse(xCloud + 25, yCloud, 50, 50);
ellipse(xCloud + 50, yCloud, 50, 50);
ellipse(xCloud + 75, yCloud, 50, 50);
}

void moveCloud(){
  xCloud++;
}
}

//In the Windmill class
//---------------------
class Windmill{
  // properties
  int xTower, yTower;
  int red, green, blue;
  int angle;
  boolean rotateFan;
  // constructor
  Windmill(int xTower, int yTower, int red, int green, int blue){
    this.xTower = xTower;
    this.yTower = yTower;
    this.red = red;
    this.green = green;
    this.blue = blue;
    rotateFan = false;
    angle = 0;
  }

  // WINDMILL
  void createWindmill(){
  int towerWidth = 20;
  int towerHeight = 150;

  int xFan = xTower + towerWidth/2;
  int yFan = yTower - towerHeight;

  // TOWER
  fill(red, green, blue);
  triangle(xTower, yTower, xTower + towerWidth, yTower,  xTower + towerWidth/2, yTower - towerHeight);

  if(rotateFan == false){
    angle = angle;
  }else{
    angle+=5;
  }

  pushMatrix();
  translate(xFan, yFan);
  rotate(radians(angle));
  // FAN
  fill(150);
  triangle(0, 0, - 25 - 5,  - 25 + 5, - 25 + 5,- 25 - 5);
  triangle(0, 0,  25 - 5,  - 25 - 5, 25 + 5,- 25 + 5);
  triangle(0, 0,  25 + 5,  25 - 5, 25 - 5, + 25 + 5);
  triangle(0, 0, - 25 + 5, 25 + 5, - 25 - 5, 25 - 5);
  popMatrix();
  }
}

// In the main file
//---------------------
Cloud myCloud1; // this is your Cloud object
Cloud anotherCloud;

Windmill myWindmill;
Windmill secondWindmill;
void setup(){
size(500, 500);
noStroke();

myCloud1 = new Cloud(100, 100); // instantiate the Cloud object
anotherCloud = new Cloud(300, 200);

myWindmill = new Windmill(400, 400, 150, 20, 100);
secondWindmill = new Windmill(100, 450, 100, 50, 200);
}

void draw(){
background(135, 206, 250);
myCloud1.createCloud();
myCloud1.moveCloud();

anotherCloud.createLongerCloud();

// GREEN FIELD
fill(34, 139, 34);
rect(0, 350, width, 150);

myWindmill.createWindmill(); // draw the first windmill
myWindmill.xTower--;

secondWindmill.createWindmill(); // draw the second windmill
secondWindmill.xTower++; // move the second windmill to the right
secondWindmill.rotateFan = true;

}
