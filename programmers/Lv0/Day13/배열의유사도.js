function solution(s1, s2) {
  let ans = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) != -1) {
      ans += 1;
    }
  }
  return ans;
}
