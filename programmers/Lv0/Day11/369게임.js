function solution(order) {
  let count = 0;
  let myfunc = (num) => Number(num);
  let strArr = Array.from(String(order), myfunc);

  strArr.forEach((num) => {
    if (num === 3 || num === 6 || num === 9) {
      count++;
    }
  });

  return count;
}
