class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const root: TreeNode = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const inOrderList: number[] = [];
const levelOrderList: number[] = [];
const preOrderList: number[] = [];
const postOrderList: number[] = [];
const inorderTraversal = (root: TreeNode | null): void => {
  if (root == null) return;
  inorderTraversal(root.left);
  inOrderList.push(root.val);
  inorderTraversal(root.right);
};
const preorderTraversal = (root: TreeNode | null): void => {
  if (root == null) return;
  preOrderList.push(root.val);
  preorderTraversal(root.left);
  preorderTraversal(root.right);
};
const postorderTraversal = (root: TreeNode | null): void => {
  if (root == null) return;
  postorderTraversal(root.left);
  postorderTraversal(root.right);
  postOrderList.push(root.val);
};
const levelorderTraversal = (root: TreeNode | null): void => {
  if (root == null) return;
  const queue: TreeNode[] = [root];
  while (queue.length > 0) {
    let levelSize: number = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node: TreeNode | undefined = queue.shift();
      if (node != undefined) levelOrderList.push(node.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
  }
};
inorderTraversal(root);
console.log("The InOrder Traversal Of The Binary Tree =>: ", inOrderList);
levelorderTraversal(root);
console.log(
  "The Level Order Traversal Of The Binary Tree =>: ",
  levelOrderList
);
preorderTraversal(root);
console.log("The PreOrder Traversal Of The Binary Tree =>: ", preOrderList);
postorderTraversal(root);
console.log("The PostOrder Traversal Of The Binary Tree =>: ", postOrderList);
