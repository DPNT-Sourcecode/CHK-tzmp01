"use strict";

const priceA = () => 50;

const priceB = () => 30;

const priceC = () => 20;

const priceD = () => 15;

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  console.log("skus", skus);
  switch (skus) {
    case "A":
      return priceA();
    case "B":
      return priceB();
    case "C":
      return priceC();
    case "D":
      return priceD();
    default:
      return -1;
  }
};


