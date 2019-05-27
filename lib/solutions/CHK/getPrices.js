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

const priceK = totalK => {
  let sumK = totalK * 80;
  sumK = sumK - 10 * Math.floor(totalK / 2);
  return sumK;
};

const priceL = totalL => totalL * 90;

const priceM = (totalM, totalN) => {
  let totalMToPay = totalM;
  if (totalN > 0) totalMToPay = totalM - Math.floor(totalN / 3);
  if (totalMToPay < 1) return 0;
  let sumM = totalMToPay * 15;
  return sumM;
};

const priceN = totalN => totalN * 40;

const priceO = totalO => totalO * 10;

const priceP = totalP => {
  let sumP = totalP * 50;
  sumP = sumP - 50 * Math.floor(totalP / 5);
  return sumP;
};

const priceQ = (totalQ, totalR) => {
  let totalQToPay = totalQ;
  if (totalR > 0) totalQToPay = totalQ - Math.floor(totalR / 3);
  if (totalQToPay < 1) return 0;
  let sumQ = totalQToPay * 30;
  sumQ = sumQ - 10 * Math.floor(totalQToPay / 3);
  return sumQ;
};

const priceR = totalR => totalR * 50;

const priceS = totalS => totalS * 20;

const priceT = totalT => totalT * 20;

const priceU = totalU => {
  let sumU = totalU * 40;
  sumU = sumU - 40 * Math.floor(totalU / 4);
  return sumU;
};

const priceV = totalV => {
  let numV = totalV;
  let sumV = 50 * totalV;

  sumV = sumV - 10 * Math.floor(numV / 3);

  if (totalV / 3 > 1) {
    sumV = sumV - 10 * Math.floor(numV / 3);
    numV = numV - 3 * Math.floor(numV / 3);
  }

  sumV = sumV - 10 * Math.floor(numV / 2);
  return sumV;
};

const priceW = totalW => totalW * 20;

const priceX = totalX => totalX * 17;

const priceY = totalY => totalY * 20;

const priceZ = totalZ => totalZ * 21;

const priceSTXYZ = totalSTXYZ => 45 * Math.floor(totalSTXYZ / 3);

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
  priceZ,
  priceSTXYZ
};


