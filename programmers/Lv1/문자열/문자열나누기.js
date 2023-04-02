function solution(s) {
  //stack에 쌓인 첫 문자와 같은 문자가 다시 들어오는지 체크
  //같은 문자열끼리의 배열과 다른 문자열끼리의 배열의 길이가 같아지면 stack 배열을 초기화시켜
  //다음 배열을 체크(반복)
  //반복문이 끝난 이후에 배열이 비어있지 않다면 카운트를 증가시켜 주며 초기화.

  let stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    console.log("stack", stack);

    let same = stack.filter((item) => item === stack[0]);
    let notsame = stack.filter((item) => item !== stack[0]);
    console.log("same :", same);
    console.log("notsame :", notsame);

    if (same.length === notsame.length) {
      count++;
      stack = [];
    }
  }
  if (stack.length !== 0) {
    stack = [];
    count++;
  }
  return count;
}
