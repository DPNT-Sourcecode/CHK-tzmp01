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
  }
};
