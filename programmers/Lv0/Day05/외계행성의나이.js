function solution(age) {
  let result = String(age).split("");

  for (i in result) {
    if (result[i] == "0") {
      result[i] = "a";
    } else if (result[i] == "1") {
      result[i] = "b";
    } else if (result[i] == "2") {
      result[i] = "c";
    } else if (result[i] == "3") {
      result[i] = "d";
    } else if (result[i] == "4") {
      result[i] = "e";
    } else if (result[i] == "5") {
      result[i] = "f";
    } else if (result[i] == "6") {
      result[i] = "g";
    } else if (result[i] == "7") {
      result[i] = "h";
    } else if (result[i] == "8") {
      result[i] = "i";
    } else if (result[i] == "9") {
      result[i] = "j";
    }
  }
  const answer = result.join("");

  return answer;
}
