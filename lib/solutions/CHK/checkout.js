"use strict";

const priceA = () => 50;

const discountA = () => 30;

const priceB = () => 30;

const discountB = () => 15;

const priceC = () => 20;

const priceD = () => 15;

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  console.log("skus", skus);
  const products = skus.split("");
  if (!products || products.length < 1) return -1;
  try {
    let countA = 0;
    let countB = 0;
    return products
      .map(product => {
        if (product.indexOf("A") > -1) {
          countA += 1;
          if (countA % 3) {
            return discountA();
          }
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






