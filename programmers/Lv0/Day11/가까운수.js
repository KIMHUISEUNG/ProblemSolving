function solution(array, n) {
  let ans = [];

  array.forEach((items) => ans.push(Math.abs(items - n)));

  let min = Math.min(...ans);
  console.log("min", min);
  let check = [];

  for (let index = 0; index < ans.length; index++) {
    //차이값 min과 같은 값이 여러 개인 경우도 전부 check 배열에 값을 담아 그중 가장 작은 것을
    // return 한다.
    if (ans[index] === min) {
      check.push(array[index]);
    }
  }
  return Math.min(...check);
}
