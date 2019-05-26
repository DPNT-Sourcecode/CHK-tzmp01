const sum = require("../../../lib/solutions/SUM/sum");

describe("SUM challenge: adding two numbers", function() {
  it("should return 3, which is the sum of 1 and 2", function() {
    expect(sum(1, 2)).toBe(3);
  });

  it.only("should throw an error when param[0] is less than 0", function() {
    expect(sum(-1, 2)).toThrow("Error: param[0] is less than 0");
  });

  it("should throw an error when param[1] is less than 0", function() {
    assert.throws(sum(1, -2));
  });

  it("should throw an error is param[0] is greater than 100", function() {
    asssert.throws(sum(101, 2));
  });

  it("should throw an error is param[1] is greater than 100", function() {
    asssert.throws(sum(1, 102));
  });
});
