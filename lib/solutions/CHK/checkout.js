"use strict";

const priceA = () => 50;

const priceB = () => 30;

const priceC = () => 20;

const priceD = () => 15;

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  if (skus === "") return -1;
  console.log("skus", skus);
  const products = skus.split(",");
  products.map(product => {
    if (product.indexOf("A") > -1) {
      return priceA();
    }
    if (product.indexOf("B") > -1) {
      return priceA();
    }
    if (product.indexOf("C") > -1) {
      return priceA();
    }
    if (product.indexOf("D") > -1) {
      return priceA();
    }
  });
};



