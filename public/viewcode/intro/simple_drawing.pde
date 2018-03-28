size(500, 500);

// DRAW A BIG CIRCLE
ellipse(width/2, height/2, 500, 500);
//ellipse(width/2, height/2, width, height);

//DRAW A RECTANGLE ON TOP OF THE BIG CIRCLE
rect(50, 50, 400, 400);

//DRAW THE PARTIAL CIRCLES ON THE CORNERS OF THE CANVAS
fill(0)
ellipse(0, 0, 100, 100);

fill(255);
ellipse(500, 0, 100, 100);

fill(255, 0, 0);
ellipse(0, 500, 100, 100);

fill(0, 255, 0, 20);
ellipse(500, 500, 100, 100);

// DRAW 4 RECTANGLES ON THE CORNERS OF THE BIG RECTANGLE
rect(50, 50, 50, 50);
rect(50 + 350, 50, 50, 50);
rect(50 + 350, 50 + 350, 50, 50);
rect(50, 50 + 350, 50, 50);

// DRAW 2 LINES
line(width/2 - 100, height/2 - 100, width/2 + 100, height/2 + 100);
line(width/2 - 100, height/2 + 100, width/2 + 100, height);
