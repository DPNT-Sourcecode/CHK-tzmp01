"use strict";

const priceA = numA => {
  let sumA = 50 * numA;

  sumA = sumA - 20 * Math.floor(numA / 3);
  sumA = sumA - 30 * Math.floor(numA / 5);
  sumA = sumA + 40 * Math.floor(numA / 15);
  return sumA;
};

const priceB = (totalB, totalE) => {
  let totalBToPay = totalB - Math.floor(totalE / 2);
  if (totalBToPay < 1) return 0;
  let sumA = totalBToPay * 30;
  sumA = sumA - 15 * Math.floor(totalB / 2);
};

const priceC = totalC => totalC * 20;

const priceD = totalD => totalD * 15;

const priceE = totalE => totalE * 40;

//noinspection JSUnusedLocalSymbols
module.exports = {
  priceB: priceB,
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








