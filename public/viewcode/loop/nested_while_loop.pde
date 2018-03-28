size(500, 500);
// create 10 x 10 rectangles on a canvas
int col = 0; // declaration
while(col < 10){
  int row = 0;
  while(row < 10){
    rect(col *50, row*50, 50, 50);
    row++;
  }
  col++;
}
