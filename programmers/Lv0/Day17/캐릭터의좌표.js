function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  const remit = [
    Math.abs(Math.floor(board[0] / 2)),
    Math.abs(Math.floor(board[1] / 2)),
  ];
  // let arr = keyinput;

  for (let item of keyinput) {
    switch (item) {
      case "up":
        y += 1;
        break;
      case "down":
        y -= 1;
        break;
      case "left":
        x -= 1;
        break;
      case "right":
        x += 1;
        break;
    }
    if (Math.abs(x) > remit[0]) {
      x = x > 0 ? remit[0] : remit[0] * -1;
    }
    if (Math.abs(y) > remit[1]) {
      y = y > 0 ? remit[1] : remit[1] * -1;
    }
  }

  return [x, y];
}
