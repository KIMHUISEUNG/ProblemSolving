function solution(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let myfunc = (num) => Number(num);
    let intArr = Array.from(String(array[i]), myfunc);

    for (let j = 0; j < intArr.length; j++) {
      if (intArr[j] === 7) {
        count += 1;
      }
    }
  }
  return count;
}
