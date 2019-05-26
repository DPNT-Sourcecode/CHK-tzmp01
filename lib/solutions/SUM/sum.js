"use strict";

module.exports = function(x, y) {
  if (x < 0) throw new Error("param[0] is less than 0");
  if (y < 0) throw new Error("param[1] is less than 0");
  if (x > 100) throw new Error("param[0] is greater than 100");
  if (x > 100) throw new Error("param[1] is greater than 100");
  return x + y;
};

