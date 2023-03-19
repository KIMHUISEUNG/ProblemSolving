function solution(angle) {
  var answer = 0;

  if (0 < angle && angle < 90) {
    answer = 1;
  } else if (angle == 90) {
    answer = 2;
  } else if (90 < angle && angle < 180) {
    answer = 3;
  } else if (angle == 180) {
    answer = 4;
  }

  return answer;
}

/*
1 예각 : 0 < angle < 90
2 직각 : angle = 90
3 둔각 : 90 < angle < 180
4 평각 : angle = 180
*/
