const priceA = totalA => {
  let numA = totalA;
  let sumA = 50 * totalA;

  sumA = sumA - 30 * Math.floor(numA / 5);

  if (totalA / 5 > 1) {
    sumA = sumA - 20 * Math.floor(numA / 5);
    numA = numA - 5 * Math.floor(numA / 5);
  }

  sumA = sumA - 20 * Math.floor(numA / 3);
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

const priceG = totalG => totalG * 20;

const priceH = totalH => {
  let sumH = totalH * 10;
  let numH = totalH;

  sumH = sumH - 10 * Math.floor(numH / 10);

  if (totalH / 10 > 1) {
    sumH = sumH - 10 * Math.floor(numH / 10);
    numH = numH - 10 * Math.floor(numH / 10);
  }

  sumH = sumH - 5 * Math.floor(numH / 5);
  return sumH;
};

const priceI = totalI => totalI * 35;

const priceJ = totalJ => totalJ * 60;

const priceK = totalK => totalK * 80;

const priceL = totalL => totalL * 90;

const priceM = totalM => totalM * 15;

const priceN = totalN => totalN * 40;

const priceO = totalO => totalO * 10;

const priceP = totalP => totalP * 50;

const priceQ = totalQ => totalQ * 30;

const priceR = totalR => totalR * 50;

const priceS = totalS => totalS * 30;

const priceT = totalT => totalT * 20;

const priceU = totalU => totalU * 40;

const priceV = totalV => totalV * 50;

const priceW = totalW => totalW * 20;

const priceX = totalX => totalX * 90;

const priceY = totalY => totalY * 10;

const priceZ = totalZ => totalZ * 50;

module.exports = {
  priceA,
  priceB,
  priceC,
  priceD,
  priceE,
  priceF,
  priceG,
  priceH,
  priceI,
  priceJ,
  priceK,
  priceL,
  priceM,
  priceN,
  priceO,
  priceP,
  priceQ,
  priceR,
  priceS,
  priceT,
  priceU,
  priceV,
  priceW,
  priceX,
  priceY,
  priceZ
};