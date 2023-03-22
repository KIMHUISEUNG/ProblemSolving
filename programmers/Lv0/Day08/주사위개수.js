function solution(box, n) {
  let wide = Math.floor(box[0] / n);
  let depth = Math.floor(box[1] / n);
  let height = Math.floor(box[2] / n);

  return wide * depth * height;
}
