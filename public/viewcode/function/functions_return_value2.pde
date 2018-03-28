int xcir1, xcir2, ycir1, ycir2;
int rcir1, rcir2;
void setup(){
size(500, 400);
xcir1 = 50;
xcir2 = 450;
rcir1 = 100/2;
rcir2 = 100/2;
}

void draw(){
  background(150);
  xcir1++;
  xcir2--;
  ellipse(xcir1, 50, rcir1*2, rcir1*2);
  ellipse(xcir2, 50, rcir2*2, rcir2*2);
  if(checkCollission(xcir1, xcir2, ycir1, ycir2) == true){
    println("collide");
  }else{
    println("NOT COLLIDE");
  }
}

boolean checkCollission(int x1, int x2, int y1, int y2){
  // dist is a built-in function that checks the distance between two points
  return dist(x1, y1, x2, y2) < r1 + r2;
  /*if(dist(x1, y1, x2, y2) < r1 + r2){
    return true;
  }else{
    return false;
  }
  */
}
