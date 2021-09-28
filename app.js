const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions of: ${l}, ${w}`);

  if (l <= 0 || w <= 0) {
    console.log(
      `Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`
    );
  } else {
    console.log(`Area of rectangle: ${rect.area(l, w)}`);
    console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
  }
}
//valid
solveRect(2, 4);
solveRect(3, 5);
//invalid
solveRect(0, 5);
solveRect(2, -4);
