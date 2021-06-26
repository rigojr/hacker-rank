// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a: number[], b: number[]): number {
  const initNumber = a[a.length - 1];
  const finalNumber = b[0];
  let evaluationArray = [];
  let totalX = 0;
  for (let index = initNumber; index <= finalNumber; index++) {
      if (a.every(e => (index % e) === 0 )) evaluationArray.push(index)
  }
  evaluationArray.forEach(e => {
      if (b.every(eb => (eb % e) === 0)) totalX +=1;
  });
  return totalX;
}