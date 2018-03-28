size(500, 500);
// create 10 x 10 rectangles on a canvas
for(int col = 0;col < 10;col++){
  for(int row = 0;row < 10;row++){
    rect(col *50, row*50, 50, 50);
  }
}
