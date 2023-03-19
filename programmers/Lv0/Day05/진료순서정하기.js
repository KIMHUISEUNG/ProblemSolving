function solution(emergency) {
  // let order = new Map();
  // let answer = emergency.slice().sort((a,b)=>b-a);
  // for (let i =0; i < answer.length; i++){
  //     console.log(order.set(answer[i], i+1))
  //     order.set(answer[i], i+1)
  // }
  // return emergency.map(v => order.get(v))
  let sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
