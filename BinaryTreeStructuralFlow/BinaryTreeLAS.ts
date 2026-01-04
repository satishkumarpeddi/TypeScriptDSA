class TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number | null) {
    this.val = val == null ? null : val;
    this.left = null;
    this.right = null;
  }
}
function lowestCommonAncestorOfBS(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root == null) return root;
  if (root && root.val && p && p.val && q && q.val) {
    if (root.val > p.val && root.val > q.val)
      return lowestCommonAncestorOfBS(root.left, p, q);
    else if (root.val < p.val && root.val < q.val)
      return lowestCommonAncestorOfBS(root.right, p, q);
    else return root;
  }
  return root;
}
let root: TreeNode | null | any = null;
root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
let result: TreeNode | null | any = lowestCommonAncestorOfBS(
  root,
  root.left,
  root.right
);
console.log(result.val, "is the lowest common ancestor of Binary Search Tree.");
