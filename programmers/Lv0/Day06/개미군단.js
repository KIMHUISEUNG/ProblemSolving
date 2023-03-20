function solution(hp) {
  const antA = 5,
    antB = 3,
    antC = 1;
  let newhp = hp;
  let result = [0, 0, 0];

  let arr1 = Math.floor(newhp / antA); // 4
  newhp -= arr1 * antA; // 23 - (4*5) = 3
  let arr2 = Math.floor(newhp / antB); // 1
  newhp -= arr2 * antB; // 3 - (1*3) = 0
  let arr3 = Math.floor(newhp / antC); // 0
  newhp -= arr3 * antC; // 0 - (0*1) = 0

  var answer = arr1 + arr2 + arr3;
  return answer;
}

// 장군개미는 5의 공격력
// 병정개미는 3의 공격력
// 일개미는 1의 공격력

//greed 기법
