"use strict";

const priceA = numA => {
  let sumA = 0;
  sumA = 50 * numA;
  if (numA % 3 === 0) {
    sumA = sumA - (20 * numA) / 3;
  }
  if (numA % 5 === 0) {
    sumA = sumA - (20 * numA) / 5;
  }
  return sumA;
};

const priceB = totalB => 30;

const priceC = totalC => 20;

const priceD = totalD => 15;

const priceE = totalE => 40;

//noinspection JSUnusedLocalSymbols
module.exports = {
  priceA: priceA,
  default: function(skus) {
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
      products.map(product => {
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
            break;
        }
      });
      return (
        priceA(totalA) +
        priceB(totalB) +
        priceC(totalC) +
        priceD(totalD) +
        priceE(totalE)
      );
    } catch (error) {
      return -1;
    }
  }
};



