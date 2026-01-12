function countBST(n: number): number {
  let dp: number[] = [];
  dp[0] = 1; //Base Condition
  dp[1] = 1; //Base Condition
  for (let nodes = 1; nodes <= n; nodes++) {
    dp[nodes] = 0;
    for (let left = 0; left <= nodes - 1; left++) {
      dp[nodes] += dp[left] * dp[nodes - 1 - left];
    }
  }
  return dp[n];
}
console.log(
  "The total number of Binary Search Tree's by n value using Dynamic Programming apporach:",
  countBST(10)
);
