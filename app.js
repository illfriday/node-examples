//we start by creating an OBJECT(rect) with 2 METHODS(perimeter, area)with 2 PARAMETERS each(x & y)

// const rect = {
//   perimeter: (x, y) => 2 * (x + y),
//   area: (x, y) => x * y,
// };

const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`Solving for rectangle with the dimension ${l} & ${w}`);

  if (l <= 0 || w <= 0) {
    console.log(
      `Error. Rectangle dimensions must be greater than 0. Received: ${l}, ${w}.`
    );
  } else {
    console.log(`Area of rectangle: ${rect.area(l, w)}.`);

    console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}.`);
  }
}

solveRect(0, 9);
solveRect(9, 9);
solveRect(-9, 9);
