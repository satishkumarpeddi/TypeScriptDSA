import { error } from "node:console";

class BinaryTreeDemo {
  val: number | null;
  left: BinaryTreeDemo | null;
  right: BinaryTreeDemo | null;
  constructor(val?: number | null, left = null, right = null) {
    this.val = val === undefined ? 0 : val;
    this.left = left;
    this.right = right;
  }
}
function insert(
  root: BinaryTreeDemo | null,
  val: number | null
): BinaryTreeDemo | null {
  if (root == null) return new BinaryTreeDemo(val);
  if (root !== null && root.val !== null && val !== null) {
    if (val < root.val) root.left = insert(root.left, val);
    else if (val > root.val) root.right = insert(root.right, val);
  }
  return root;
}
function minValueNode(root: BinaryTreeDemo | null): BinaryTreeDemo | null {
  let temp = root;
  if (temp !== null)
    while (temp.left != null) {
      temp = temp.left;
    }
  return temp;
}
function deleteMethod(
  root: BinaryTreeDemo | null,
  val: number | null
): BinaryTreeDemo | null {
  if (root == null) return null;
  if (root !== null && root.val !== null && val !== null)
    if (val < root.val) root.left = deleteMethod(root.left, val);
    else if (val > root.val) root.right = deleteMethod(root.right, val);
    else {
      if (root.left == null) return root.right;
      if (root.right == null) return root.left;
      let temp = minValueNode(root.right);
      if (temp !== null && temp.val !== null) {
        root.val = temp.val;
        root.right = deleteMethod(root.right, temp.val);
      }
    }
  return root;
}
let root = null;
root = insert(root, 1);
root = insert(root, 21);
root = insert(root, 13);
root = insert(root, 11);
root = insert(root, 10);
root = insert(root, 9);
let listInOrder: any = [];
let listPreOrder: any = [];
let listPostOrder: any = [];
let listLevelOrder: any = [];
const inorder = (root: BinaryTreeDemo | null) => {
  if (root === null) return;
  inorder(root.left);
  listInOrder.push(root.val);
  inorder(root.right);
};
const preorder = (root: BinaryTreeDemo | null) => {
  if (root === null) return;
  listPreOrder.push(root.val);
  preorder(root.left);
  preorder(root.right);
};
const postorder = (root: BinaryTreeDemo | null) => {
  if (root == null) return;
  postorder(root.left);
  postorder(root.right);
  listPostOrder.push(root.val);
};
const levelorder = (root: BinaryTreeDemo | null) => {
  if (root == null) return;
  let queue = [root];
  while (queue.length > 0) {
    let curr: any = queue.shift();
    listLevelOrder.push(curr.val);
    if (curr.left) levelorder(curr.left);
    if (curr.right) levelorder(curr.right);
  }
};
//Traversal On BinaryTree
inorder(root);
postorder(root);
preorder(root);
levelorder(root);
console.log("In Order Traversal Of Binary Tree =>: ", listInOrder);
listInOrder = [];
console.log("Pre Order Traversal Of Binary Tree =>: ", listPreOrder);
listPreOrder = [];
console.log("Post Order Traversal Of Binary Tree =>: ", listPostOrder);
listPostOrder = [];
console.log("In Order Traversal Of Binary Tree =>: ", listLevelOrder);
listLevelOrder = [];
//Deleting 13
root = deleteMethod(root, 13);
inorder(root);
postorder(root);
preorder(root);
levelorder(root);
console.log("After delete 13 form Binary Tree =>: ", listInOrder);
listInOrder = [];
console.log("After delete 13 form Binary Tree =>: ", listPreOrder);
listPreOrder = [];
console.log("After delete 13 form Binary Tree =>: ", listPostOrder);
listPostOrder = [];
console.log("After delete 13 form Binary Tree =>: ", listLevelOrder);
listLevelOrder = [];
//Deleting 11
root = deleteMethod(root, 11);
inorder(root);
postorder(root);
preorder(root);
levelorder(root);
console.log("After delete 11 form Binary Tree =>: ", listInOrder);
listInOrder = [];
console.log("After delete 11 form Binary Tree =>: ", listPreOrder);
listPreOrder = [];
console.log("After delete 11 form Binary Tree =>: ", listPostOrder);
listPostOrder = [];
console.log("After delete 11 form Binary Tree =>: ", listLevelOrder);
listLevelOrder = [];
//Deleting 9
root = deleteMethod(root, 9);
inorder(root);
postorder(root);
preorder(root);
levelorder(root);
console.log("After delete 9 form Binary Tree =>: ", listInOrder);
listInOrder = [];
console.log("After delete 9 form Binary Tree =>: ", listPreOrder);
listPreOrder = [];
console.log("After delete 9 form Binary Tree =>: ", listPostOrder);
listPostOrder = [];
console.log("After delete 9 form Binary Tree =>: ", listLevelOrder);
listLevelOrder = [];
