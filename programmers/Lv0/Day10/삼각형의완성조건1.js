function solution(sides) {
  let bigNum = Math.max(...sides);
  let otherNum = sides[0] + sides[1] + sides[2] - bigNum;
  if (otherNum > bigNum) {
    return 1;
  } else {
    return 2;
  }
}

//1. 가장 큰수 찾기
//2. 나머지 수의 합 과 가장 큰수 비교
