function solution(array) {
  let answer = [];
  let arr = array;
  let maxArr = Math.max(...arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === maxArr) {
      answer.push(arr[i], i);
    }
  }
  return answer;
}
