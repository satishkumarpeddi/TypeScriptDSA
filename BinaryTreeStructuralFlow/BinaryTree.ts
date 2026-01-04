import { error } from "node:console";

class BinaryTreeDemo {
  val: number | null;
  left: BinaryTreeDemo | null;
  right: BinaryTreeDemo | null;
  constructor(val?: number | null, left = null, right = null) {
    this.val = val !== undefined ? val : 0;
    this.left = left;
    this.right = right;
  }
}
function insert(
  root: BinaryTreeDemo | null,
  val: number | 0
): BinaryTreeDemo | null {
  if (val !== null) {
    if (root === null) return new BinaryTreeDemo(val);
  }
  if (root !== null && root.val !== null) {
    if (val < root.val) root.left = insert(root.left, val);
    else if (val > root.val) root.right = insert(root.right, val);
  }
  return root;
}
function minValueNode(root: BinaryTreeDemo | null): BinaryTreeDemo | null {
  let temp = root;
  while (temp && temp.left != null) {
    temp = temp.left;
  }
  return temp;
}
function deleteMethod(
  root: BinaryTreeDemo | null,
  val: number | null
): BinaryTreeDemo | null {
  if (root == null) return null;
  if (val !== null && root.val !== null) {
    if (val < root.val) root.left = deleteMethod(root.left, val);
    else if (val > root.val) root.right = deleteMethod(root.right, val);
    else {
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;
      let temp = minValueNode(root.right);
      if (temp !== null) {
        root.val = temp.val;
        root.right = deleteMethod(root.right, temp.val);
      }
    }
  }
  return root;
}
let root: BinaryTreeDemo | null = null;
root = insert(root, 1);
root = insert(root, 21);
root = insert(root, 13);
root = insert(root, 11);
root = insert(root, 10);
root = insert(root, 9);
let list: any = [];
function inorder(root: BinaryTreeDemo | null): void {
  if (root === null) return;
  inorder(root.left);
  list.push(root.val);
  inorder(root.right);
}
inorder(root);
console.log("In Order Traversal Of Binary Tree =>: ", list);
list = [];
root = deleteMethod(root, 13);
inorder(root);
console.log("After delete 13 form Binary Tree =>: ", list);
list = [];
root = deleteMethod(root, 11);
inorder(root);
console.log("After delete 11 form Binary Tree =>: ", list);
list = [];
root = deleteMethod(root, 9);
inorder(root);
console.log("After delete 9 form Binary Tree =>: ", list);
