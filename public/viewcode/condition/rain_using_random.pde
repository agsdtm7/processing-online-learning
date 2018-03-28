int xrain = 0;
int yrain = 0;

void setup(){
size(400, 400);
strokeWeight(5);
}

void draw(){
background(255);
// background(100, 200, 255);

xrain = int(random(width));
yrain = int(random(height));
line(xrain, yrain, xrain + 8, yrain + 8);
}
