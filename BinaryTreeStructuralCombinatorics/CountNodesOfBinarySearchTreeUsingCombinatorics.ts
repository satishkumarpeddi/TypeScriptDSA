let countBST = (n: number): number => {
  if (n === 0 || n === 1) return 1;
  let total: number = 0;
  for (let left = 0; left <= n - 1; left++) {
    let right = n - 1 - left;
    total += countBST(left) * countBST(right);
  }
  return total;
};

console.log(
  "The total number of Binary Search Tree's possible : " + countBST(3)
);
