//call the require() FUNCTION from NODE .this will call the exports set up in the rectangle.js file
const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions of: ${l}, ${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR:", err.message);
    } else {
      //use two FUNCTIONS(area() & perimeter()) set up in rectangle.js which we imported using the require FUNCTION from NODE
      console.log(
        `Area of rectangle with dimensions: ${l}, ${w} is: ${rectangle.area()}`
      );
      console.log(
        `Perimeter of rectangle with dimensions: ${l}, ${w} is: ${rectangle.perimeter()}`
      );
    }
  });
  console.log("This statement is logged after the call to rect()");
}

//valid
solveRect(2, 4);
solveRect(3, 5);
//invalid
solveRect(0, 5);
solveRect(2, -4);
