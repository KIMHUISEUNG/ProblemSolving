function solution(num, k) {
  let myfunc = (num) => Number(num);
  let arr = Array.from(String(num), myfunc);

  let ans = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === k) {
      ans.push(index);
    }
  }
  if (ans.length > 0) {
    return Number(ans[0]) + 1;
  } else {
    return -1;
  }
}
