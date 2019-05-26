"use strict";

const priceA = () => 50;

const discount3A = () => 30;

const discount5A = () => 20;

const discount3A5ACombined = () => 40;

const priceB = () => 30;

const discountB = () => 15;

const priceC = () => 20;

const priceD = () => 15;

const priceE = () => 40;

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  if (skus === "") return 0;
  try {
    if (!skus || typeof skus !== "string") return -1;
    const products = skus.split("");
    if (!products || products.length < 1) return -1;
    let totalA = 0;
    let totalB = 0;
    let totalC = 0;
    let totalD = 0;
    let totalE = 0;
    products
      .map(product => {
        switch (product) {
          case "A":
            totalA += 1;
            break;
          case "B":
            totalB += 1;
            break;
          case "C":
            totalC += 1;
            break;
          case "D":
            totalD += 1;
            break;
          case "E":
            totalE += 1;
            break;
          default:
            throw new Error("no product");
        }
        if (product.indexOf("A") > -1) {
          totalA += 1;
          // if (countA % 3 === 0) return discountA();
          // return priceA();
        }
        if (product.indexOf("B") > -1) {
          totalB += 1;
          // if (countB % 2 === 0) return discountB();
          // return priceB();
        }
        if (product.indexOf("C") > -1) {
          return priceC();
        }
        if (product.indexOf("D") > -1) {
          return priceD();
        }
        if (produ) throw new Error("no product");
      })
      .reduce((prevVal, curVal) => prevVal + curVal);
  } catch (error) {
    return -1;
  }
};



