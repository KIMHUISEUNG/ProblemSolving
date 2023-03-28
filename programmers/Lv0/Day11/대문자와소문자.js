function solution(my_string) {
  let arrStr = Array.from(my_string);

  for (let i = 0; i < arrStr.length; i++) {
    if (
      arrStr[i] == arrStr[i].toUpperCase() &&
      arrStr[i] != arrStr[i].toLowerCase()
    ) {
      arrStr[i] = arrStr[i].toLowerCase();
    } else if (
      arrStr[i] != arrStr[i].toUpperCase() &&
      arrStr[i] == arrStr[i].toLowerCase()
    ) {
      arrStr[i] = arrStr[i].toUpperCase();
    }
  }
  return arrStr.join("");
}
