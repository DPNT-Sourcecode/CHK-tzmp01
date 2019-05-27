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
      prices.priceF(totals.totalF) +
      prices.priceG(totals.totalG) +
      prices.priceH(totals.totalH) +
      prices.priceI(totals.totalI) +
      prices.priceJ(totals.totalJ) +
      prices.priceK(totals.totalK) +
      prices.priceL(totals.totalL) +
      prices.priceM(totals.totalM) +
      prices.priceN(totals.totalN) +
      prices.priceO(totals.totalO) +
      prices.priceP(totals.totalP) +
      prices.priceQ(totals.totalQ) +
      prices.priceR(totals.totalR) +
      prices.priceS(totals.totalS) +
      prices.priceT(totals.totalT) +
      prices.priceU(totals.totalU) +
      prices.priceV(totals.totalV) +
      prices.priceW(totals.totalW) +
      prices.priceX(totals.totalX) +
      prices.priceY(totals.totalY) +
      prices.priceZ(totals.totalZ)
    );
  } catch (error) {
    return -1;
  }
};
