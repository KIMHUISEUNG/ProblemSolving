function solution(my_string) {
  //set으로 중복을 없앤다.
  let answer = new Set(Array.from(my_string));
  //다시 array로 바꾼후 문자열로 join 시켜준다.
  return Array.from(answer).join("");
}
