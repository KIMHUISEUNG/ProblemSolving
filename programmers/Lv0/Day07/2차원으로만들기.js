function solution(num_list, n) {
  const length = num_list.length;
  const divide = Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
  const newArray = [];

  for (let i = 1; i <= divide; i++) {
    // 배열 0부터 n개씩 잘라 새 배열에 넣기
    newArray.push(num_list.splice(0, n));
  }

  return newArray;
}
