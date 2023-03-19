function solution(n, k) {
  let serviceDrink = Math.floor(n / 10);
  let payDrink = Math.floor(k - serviceDrink);
  const food = 12000;
  const drink = 2000;

  var answer = food * n + drink * payDrink;

  return answer;
}
