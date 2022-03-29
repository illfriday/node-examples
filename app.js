//we start by creating an OBJECT(rect) with 2 METHODS(perimeter, area)with 2 PARAMETERS each(x & y)

// const rect = {
//   perimeter: (x, y) => 2 * (x + y),
//   area: (x, y) => x * y,
// };

const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`Solving for rectangle with the dimension ${l} & ${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR", err.message);
    } else {
      console.log(
        `Area of rectangle with dimensions ${l}, ${w}: ${rectangle.area()}.`
      );

      console.log(
        `Perimeter of rectangle with dimensions ${l}, ${w}: ${rectangle.perimeter()}.`
      );
    }
  });
  console.log("This statement is logged after the call to rect.()");
}

solveRect(0, 9);
solveRect(9, 9);
solveRect(-9, 9);
