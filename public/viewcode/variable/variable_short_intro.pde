int xCloud = 100
int yCloud = 100

size(500, 500);
background(135, 206, 250);

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
triangle(400, 400, 430, 400, 415, 250);

// FAN
fill(150);
triangle(415, 250, 415 - 25 - 5, 250 - 25 + 5, 415 - 25 + 5, 250 - 25 - 5);
triangle(415, 250, 415 + 25 - 5, 250 - 25 - 5, 415 + 25 + 5, 250 - 25 + 5);
triangle(415, 250, 415 + 25 + 5, 250 + 25 - 5, 415 + 25 - 5, 250 + 25 + 5);
triangle(415, 250, 415 - 25 + 5, 250 + 25 + 5, 415 - 25 - 5, 250 + 25 - 5);
