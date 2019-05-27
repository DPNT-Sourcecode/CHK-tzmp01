const calculateSTXYZ = (numS, numT, numX, numY, numZ) => {
  const totalSTXYZ = numS + numT + numX + numY + numZ;

  let tempS = numS
  let tempT = numT
  let tempX = numX
  let tempY = numY
  let tempZ= numZ

  let numToDelete = totalSTXYZ % 3;

  while (numToDelete > 0) {
    if (numX > 0) {
      numX - 1,

    }
  }

  return {
    totalS: numS,
    totalT: numT,
    totalX: numX,
    totalY: numY,
    totalZ: numZ,
    totalSTXYZ
  };
};

module.exports = function(products) {
  let totalA = 0;
  let totalB = 0;
  let totalC = 0;
  let totalD = 0;
  let totalE = 0;
  let totalF = 0;
  let totalG = 0;
  let totalH = 0;
  let totalI = 0;
  let totalJ = 0;
  let totalK = 0;
  let totalL = 0;
  let totalM = 0;
  let totalN = 0;
  let totalO = 0;
  let totalP = 0;
  let totalQ = 0;
  let totalR = 0;
  let totalS = 0;
  let totalT = 0;
  let totalU = 0;
  let totalV = 0;
  let totalW = 0;
  let totalX = 0;
  let totalY = 0;
  let totalZ = 0;
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
      case "F":
        totalF += 1;
        break;
      case "G":
        totalG += 1;
        break;
      case "H":
        totalH += 1;
        break;
      case "I":
        totalI += 1;
        break;
      case "J":
        totalJ += 1;
        break;
      case "K":
        totalK += 1;
        break;
      case "L":
        totalL += 1;
        break;
      case "M":
        totalM += 1;
        break;
      case "N":
        totalN += 1;
        break;
      case "O":
        totalO += 1;
        break;
      case "P":
        totalP += 1;
        break;
      case "Q":
        totalQ += 1;
        break;
      case "R":
        totalR += 1;
        break;
      case "S":
        totalS += 1;
        break;
      case "T":
        totalT += 1;
        break;
      case "U":
        totalU += 1;
        break;
      case "V":
        totalV += 1;
        break;
      case "W":
        totalW += 1;
        break;
      case "X":
        totalX += 1;
        break;
      case "Y":
        totalY += 1;
        break;
      case "Z":
        totalZ += 1;
        break;
      default:
        throw new Error("no product");
        break;
    }
  });

  const stxyz = calculateSTXYZ(totalS, totalT, totalX, totalY, totalZ);

  return {
    totalA,
    totalB,
    totalC,
    totalD,
    totalE,
    totalF,
    totalG,
    totalH,
    totalI,
    totalJ,
    totalK,
    totalL,
    totalM,
    totalN,
    totalO,
    totalP,
    totalQ,
    totalR,
    totalS: stxyz.totalS,
    totalT: stxyz.totalT,
    totalU,
    totalV,
    totalW,
    totalX: stxyz.totalX,
    totalY: stxyz.totalY,
    totalZ: stxyz.totalZ,
    totalSTXYZ: stxyz.totalSTXYZ
  };
};


