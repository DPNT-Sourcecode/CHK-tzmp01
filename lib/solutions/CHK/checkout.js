"use strict";

const getTotals = require("./getProductTotals");
const prices = require("./getPrices");

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  if (skus === "") return 0;
  try {
    if (!skus || typeof skus !== "string") return -1;
    const products = skus.split("");
    if (!products || products.length < 1) return -1;
    const totals = getTotals(products);

    return (
      prices.priceA(totals.totalA) +
      prices.priceB(totals.totalB, totals.totalE) +
      prices.priceC(totals.totalC) +
      prices.priceD(totals.totalD) +
      prices.priceE(totals.totalE) +
      prices.priceF(totals.totalF)
    );
  } catch (error) {
    return -1;
  }
};
