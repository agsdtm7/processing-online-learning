int xCloud = 100;
int yCloud = 100;

int xTower = 400;
int yTower = 400;

void setup(){
size(500, 500);
noStroke();
//createCloud();
//createWindmill();
}

void draw(){
xCloud++;
xTower--;
background(135, 206, 250);
// GREEN FIELD
fill(34, 139, 34);
rect(0, 350, width, 150);
createCloud(xCloud);
createWindmill(xTower, yTower);
println(towerWidth);
}


// CLOUD
void createCloud(int cloudX){
println(cloudX);
fill(255);
ellipse(cloudX, 100, 50, 50);
ellipse(cloudX + 25, 100, 50, 50);
ellipse(cloudX + 50, 100, 50, 50);
}

// WINDMILL
void createWindmill(int towerX, int towerY){
int towerWidth = 20;
int towerHeight = 150;

int xFan = towerX + towerWidth/2;
int yFan = towerY - towerHeight;

// TOWER
triangle(towerX, towerY, towerX + towerWidth, , towerX + towerWidth/2, towerY - towerHeight);

// FAN
fill(150);
triangle(415, 250, 415 - 25 - 5, 250 - 25 + 5, 415 - 25 + 5, 250 - 25 - 5);
triangle(415, 250, 415 + 25 - 5, 250 - 25 - 5, 415 + 25 + 5, 250 - 25 + 5);
triangle(415, 250, 415 + 25 + 5, 250 + 25 - 5, 415 + 25 - 5, 250 + 25 + 5);
triangle(415, 250, 415 - 25 + 5, 250 + 25 + 5, 415 - 25 - 5, 250 + 25 - 5);
}
size(500, 500);
background(135, 206, 250);

// GREEN FIELD
noStroke();
fill(34, 139, 34);
rect(0, 350, width, 150);

// CLOUD
fill(255);
ellipse(100, 100, 50, 50);
ellipse(100 + 25, 100, 50, 50);
ellipse(100 + 50, 100, 50, 50);

// WINDMILL
// TOWER

triangle(400, 400, 430, 400, 415, 250);

// FAN
fill(150);
triangle(415, 250, 415 - 25 - 5, 250 - 25 + 5, 415 - 25 + 5, 250 - 25 - 5);
triangle(415, 250, 415 + 25 - 5, 250 - 25 - 5, 415 + 25 + 5, 250 - 25 + 5);
triangle(415, 250, 415 + 25 + 5, 250 + 25 - 5, 415 + 25 - 5, 250 + 25 + 5);
triangle(415, 250, 415 - 25 + 5, 250 + 25 + 5, 415 - 25 - 5, 250 + 25 - 5);
}
