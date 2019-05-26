const checkout = require("../../../lib/solutions/CHK/checkout");

test("passing the price for A returns the value for A", () => {
  expect(checkout("A")).toBe(50);
});

test("passing the price for B returns the value for B", () => {
  expect(checkout("B")).toBe(30);
});

test("passing the price for C returns the value for C", () => {
  expect(checkout("C")).toBe(20);
});

test("passing the price for D returns the value for D", () => {
  expect(checkout("D")).toBe(15);
});

test("passing a null or empty string returns -1", () => {
  expect(checkout("")).toBe(-1);
});

test("passing the price for E returns the an error as E does not exist", () => {
  expect(checkout("E")).toBe(-1);
});

test("passing a non allowed character in the list should return -1", () => {
  expect(checkout("AxA")).toBe(-1);
});

test("passing multiple products will return a sum of their prices", () => {
  expect(checkout("ABCD")).toBe(115);
});

expect("passing three A products will return a discounted value", () => {
  expect(checkout("AAA")).toBe(130);
});



