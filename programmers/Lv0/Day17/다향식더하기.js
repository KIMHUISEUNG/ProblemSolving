function solution(polynomial) {
  let strArr = Array.from(polynomial.split(" + "));
  let xNum = 0;
  let Num = 0;

  console.log("strArr :", strArr);
  for (let k of strArr) {
    if (k.includes("x")) {
      let xArr = k.split("x");
      if (xArr[0] === "") {
        xNum += 1;
      }
      if (xArr[0] !== "") {
        xNum += Number(xArr[0]);
      }
    } else {
      Num += Number(k);
    }
  }
  if (xNum !== 0 && Num !== 0) {
    if (xNum === 1) {
      return `x + ${Num}`;
    }
    return `${xNum}x + ${Num}`;
  } else if (xNum !== 0 && Num === 0) {
    if (xNum === 1) {
      return `x`;
    }
    return `${xNum}x`;
  } else if (xNum === 0 && Num !== 0) {
    return `${Num}`;
  } else if (xNum === 0 && Num === 0) {
    return 0;
  }
}
