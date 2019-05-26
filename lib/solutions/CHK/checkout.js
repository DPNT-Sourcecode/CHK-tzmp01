"use strict";

let countA = 0;
let countB = 0;

const priceA = () => {
  countA = countA + 1;
  return 50;
};

const priceB = () => 30;

const priceC = () => 20;

const priceD = () => 15;

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  const products = skus.split("");
  if (!products || products.length < 1) return -1;
  try {
    return products
      .map(product => {
        if (product.indexOf("A") > -1) {
          return priceA();
        }
        if (product.indexOf("B") > -1) {
          return priceB();
        }
        if (product.indexOf("C") > -1) {
          return priceC();
        }
        if (product.indexOf("D") > -1) {
          return priceD();
        }
        throw new Error("no product");
      })
      .reduce((prevVal, curVal) => prevVal + curVal);
  } catch (error) {
    console.error("error", error);
    return -1;
  }
};




