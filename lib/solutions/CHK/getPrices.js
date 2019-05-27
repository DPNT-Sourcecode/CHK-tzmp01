const priceA = numA => {
  let totalA = numA;
  let sumA = 50 * numA;

  sumA = sumA - 30 * Math.floor(totalA / 5);

  if (totalA / 5 > 1) {
    sumA = sumA - 20 * Math.floor(totalA / 5);
    totalA = totalA - 5 * Math.floor(totalA / 5);
  }

  sumA = sumA - 20 * Math.floor(totalA / 3);
  return sumA;
};

const priceB = (totalB, totalE) => {
  let totalBToPay = totalB;
  if (totalE > 0) totalBToPay = totalB - Math.floor(totalE / 2);
  if (totalBToPay < 1) return 0;
  let sumB = totalBToPay * 30;
  sumB = sumB - 15 * Math.floor(totalBToPay / 2);
  return sumB;
};

const priceC = totalC => totalC * 20;

const priceD = totalD => totalD * 15;

const priceE = totalE => totalE * 40;

const priceF = totalF => {
  let sumF = totalF * 10;
  sumF = sumF - 10 * Math.floor(totalF / 3);
  return sumF;
};

module.exports = {
  priceA,
  priceB,
  priceC,
  priceD,
  priceE,
  priceF
};
