function solution(my_string, num1, num2) {
  let myString = Array.from(my_string);

  let numStr1 = myString[num1];
  let numStr2 = myString[num2];

  myString[num1] = numStr2;
  myString[num2] = numStr1;

  return myString.join("");
}
