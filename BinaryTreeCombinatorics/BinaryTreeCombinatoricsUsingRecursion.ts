var countBT = (n: number): number => {
  if (n === 0 || n === 1) return 1;
  let total: number = 0;
  for (let i = 1; i <= n; i++) {
    total += countBT(i - 1) * countBT(n - i);
  }
  return total;
};
console.log(
  "The total number of Binary Tree's possible by n value : ",
  countBT(3)
);
