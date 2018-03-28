int xCloud = 100;
void setup(){
size(500, 500);
noStroke();
//createCloud();
//createWindmill();
}

void draw(){
background(135, 206, 250);
// GREEN FIELD
fill(34, 139, 34);
rect(0, 350, width, 150);
background(135, 206, 250);

// GREEN FIELD
noStroke();
fill(34, 139, 34);
rect(0, 350, width, 150);

createCloud(xCloud);
xCloud++;
createWindmill();
}

// CLOUD
void createCloud(int cloudX){
fill(255);
ellipse(cloudX, 100, 50, 50);
ellipse(cloudX + 25, 100, 50, 50);
ellipse(cloudX + 50, 100, 50, 50);
}

// WINDMILL
void createWindmill(){
// TOWER
fill(150, 100, 50);
triangle(400, 400, 430, 400, 415, 250);

// FAN
fill(150);
triangle(415, 250, 415 - 25 - 5, 250 - 25 + 5, 415 - 25 + 5, 250 - 25 - 5);
triangle(415, 250, 415 + 25 - 5, 250 - 25 - 5, 415 + 25 + 5, 250 - 25 + 5);
triangle(415, 250, 415 + 25 + 5, 250 + 25 - 5, 415 + 25 - 5, 250 + 25 + 5);
triangle(415, 250, 415 - 25 + 5, 250 + 25 + 5, 415 - 25 - 5, 250 + 25 - 5);
}
