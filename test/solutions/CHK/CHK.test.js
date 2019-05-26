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

test("passing the price for E returns the an error as E does not exist", () => {
  expect(checkout("Z")).toBe(-1);
});

test("passing a non allowed character in the list should return -1", () => {
  expect(checkout("AxA")).toBe(-1);
});

test("passing multiple products will return a sum of their prices", () => {
  expect(checkout("ABCD")).toBe(115);
});

test("passing three A products will return a discounted value", () => {
  expect(checkout("AAA")).toBe(130);
});

test("passing two B products will return a discounted value", () => {
  expect(checkout("BB")).toBe(45);
});

test("if the passed value is not a string then the function should return a -1", () => {
  expect(checkout([""])).toBe(-1);
  expect(checkout([])).toBe(-1);
  expect(checkout({})).toBe(-1);
  expect(checkout(1)).toBe(-1);
  expect(checkout(null)).toBe(-1);
  expect(checkout(undefined)).toBe(-1);
  expect(checkout()).toBe(-1);
});

test("if no products are passed then the result is 0", () => {
  expect(checkout("")).toBe(0);
});

test("if 5 A products are passed then the price is 200", () => {
  expect(checkout("AAAAA")).toBe(200);
});

test("if 6 A products are passed then the price is 250", () => {
  expect(checkout("AAAAAA")).toBe(250);
});

test("if 10 A products are passed then the price is 400", () => {
  expect(checkout("AAAAAAAAAA")).toBe(400);
});

test("if 15 A products are passed then the price is 600", () => {
  expect(checkout("AAAAAAAAAAAAAAA")).toBe(600);
});

test("if an e product is passed then it returns the value for E", () => {
  expect(checkout("E")).toBe(40);
});

test("if two e products and a b product are bought then the b product is free", () => {
  expect(checkout("BEE")).toBe(80);
});

test("if four e products and four b product are bought then two B products are feww and the b discount is still applied", () => {
  expect(checkout("BBBBEEEE")).toBe(205);
});




