function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  //dots.sort((a,b)=>(a-b));

  let h = Math.abs(dots[0][0] - dots[2][0]);
  let w = Math.abs(dots[0][1] - dots[1][1]);

  return h * w;
}
