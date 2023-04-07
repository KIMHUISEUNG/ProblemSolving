function solution(array, height) {
  //let ans = 0;
  array.push(height);
  array.sort((a, b) => b - a);
  // for(let i=0; i<array.length; i++){
  //     if(array[i]===height){
  //         ans = i;
  //     }
  // }
  //return ans;
  return array.indexOf(height);
}
