
void setup(){
  size(500, 500);
  background(255, 0, 0);
}

void draw(){
  background(0, 255, 0);
}

// EVENTS -- i.e: clicking the mouse, dragging the mouse, pressing the mouse

void mouseClicked(){
  println("hello");
  fill(150);
  ellipse(mouseX, mouseY, 20, 20);
}
