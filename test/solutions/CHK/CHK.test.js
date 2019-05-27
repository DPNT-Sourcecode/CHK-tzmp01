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

test("passing the price for 'lower case' `a` returns the an error as `a` does not exist", () => {
  expect(checkout("a")).toBe(-1);
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

test("if 11 A products are passed then the price is 450", () => {
  expect(checkout("AAAAAAAAAAA")).toBe(450);
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

test("if four e products and four b product are bought then two B products are few and the b discount is still applied", () => {
  expect(checkout("BBBBEEEE")).toBe(205);
});

test("if a single F product is purchased the value of f is returned", () => {
  expect(checkout("F")).toBe(10);
});

test("if three F products are purchased then the price is shown for only 2", () => {
  expect(checkout("FFF")).toBe(20);
});

test("if 6 F products are purchased then the price paid is only for 4", () => {
  expect(checkout("FFFFFF")).toBe(40);
});

test("passing a product G returns the price for product G", () => {
  expect(checkout("G")).toBe(20);
});

test("passing a product H returns the price for product H", () => {
  expect(checkout("H")).toBe(10);
});

test("if 5 H products are passed then the price is 45", () => {
  expect(checkout("HHHHH")).toBe(45);
});

test("if 10 H products are passed then the price is 80", () => {
  expect(checkout("HHHHHHHHHH")).toBe(80);
});

test("passing a product I returns the price for product I", () => {
  expect(checkout("I")).toBe(35);
});

test("passing a product J returns the price for product J", () => {
  expect(checkout("J")).toBe(60);
});

test("passing a product K returns the price for product K", () => {
  expect(checkout("K")).toBe(80);
});

test("if 2 K products are passed then the price is 150", () => {
  expect(checkout("KK")).toBe(150);
});

test("passing a product L returns the price for product L", () => {
  expect(checkout("L")).toBe(90);
});

test("passing a product M returns the price for product M", () => {
  expect(checkout("M")).toBe(15);
});

test("passing a product N returns the price for product N", () => {
  expect(checkout("N")).toBe(40);
});

test("if 3 N producs are passed and 1 M product the M product is free", () => {
  expect(checkout("NNNM")).toBe(120);
});

test("if 3 N producs are passed and 2 M products one of the M products is free", () => {
  expect(checkout("NNNMM")).toBe(135);
});

test("passing a product O returns the price for product O", () => {
  expect(checkout("O")).toBe(10);
});

test("passing a product P returns the price for product P", () => {
  expect(checkout("P")).toBe(50);
});

test("if 5 P products are passed then the price is 200", () => {
  expect(checkout("PPPPP")).toBe(200);
});

test("passing a product Q returns the price for product Q", () => {
  expect(checkout("Q")).toBe(30);
});

test("if 3 Q products are passed then the price is 80", () => {
  expect(checkout("QQQ")).toBe(80);
});

test("passing a product R returns the price for product R", () => {
  expect(checkout("R")).toBe(50);
});

test("if 3 R producs are passed and 1 Q product the Q product is free", () => {
  expect(checkout("RRRQ")).toBe(150);
});

test("if 3 R producs are passed and 2 Q products one of the Q products is free", () => {
  expect(checkout("RRRQQ")).toBe(180);
});

test("passing a product S returns the price for product S", () => {
  expect(checkout("S")).toBe(20);
});

test("passing a product T returns the price for product T", () => {
  expect(checkout("T")).toBe(20);
});

test("passing a product U returns the price for product U", () => {
  expect(checkout("U")).toBe(40);
});

test("purchasing 4 U products will give 1 free", () => {
  expect(checkout("UUUU")).toBe(120);
});

test("passing a product V returns the price for product V", () => {
  expect(checkout("V")).toBe(50);
});

test("purchasing 2 V returns a price of 90", () => {
  expect(checkout("VV")).toBe(90);
});

test("purchasing 3 V returns a price of 130", () => {
  expect(checkout("VVV")).toBe(130);
});

test("purchasing 4 V returns a price of 130 for 3 and 50 for 1", () => {
  expect(checkout("VVVV")).toBe(180);
});

test("purchasing 5 V returns a price of 130 for 3 and 90 for 2", () => {
  expect(checkout("VVVVV")).toBe(220);
});

test("purchasing 6 V returns a price of 130 for each set of 3", () => {
  expect(checkout("VVVVVV")).toBe(260);
});

test("purchasing 7 V returns a price of 130 for each of 2 sets of 3 and 50 for the extra one", () => {
  expect(checkout("VVVVVVV")).toBe(310);
});

test("passing a product W returns the price for product W", () => {
  expect(checkout("W")).toBe(20);
});

test("passing a product X returns the price for product X", () => {
  expect(checkout("X")).toBe(17);
});

test("passing a product Y returns the price for product Y", () => {
  expect(checkout("Y")).toBe(20);
});

test("passing a product Z returns the price for product Z", () => {
  expect(checkout("Z")).toBe(21);
});

test("three S products will be 45", () => {
  expect(checkout("SSS")).toBe(45);
});

test.todo(
  "2 x products and 2 y products will be 45 for the three and 20 for the remaining y"
);


