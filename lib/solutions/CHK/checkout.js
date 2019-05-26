"use strict";

const priceA = () => 50;

const priceB = () => 30;

const priceC = () => 20;

const priceD = () => 15;

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
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
      throw new Error("Product doesn`t exist");
  }
};

