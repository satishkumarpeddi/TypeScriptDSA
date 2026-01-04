class BinaryTreeDemo {
  val: number;
  left: BinaryTreeDemo | null;
  right: BinaryTreeDemo | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insert(root: BinaryTreeDemo | null, val: number): BinaryTreeDemo {
  if (root === null) {
    return new BinaryTreeDemo(val);
  }

  if (val < root.val) {
    root.left = insert(root.left, val);
  } else if (val > root.val) {
    root.right = insert(root.right, val);
  }

  return root;
}

function minValueNode(root: BinaryTreeDemo): BinaryTreeDemo {
  let current = root;
  while (current.left !== null) {
    current = current.left;
  }
  return current;
}

function deleteMethod(
  root: BinaryTreeDemo | null,
  val: number
): BinaryTreeDemo | null {
  if (root === null) return null;

  if (val < root.val) {
    root.left = deleteMethod(root.left, val);
  } else if (val > root.val) {
    root.right = deleteMethod(root.right, val);
  } else {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;

    const temp = minValueNode(root.right);
    root.val = temp.val;
    root.right = deleteMethod(root.right, temp.val);
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

let list: number[] = [];

function inorder(root: BinaryTreeDemo | null): void {
  if (root === null) return;
  inorder(root.left);
  list.push(root.val);
  inorder(root.right);
}

inorder(root);
console.log("In Order Traversal Of Binary Tree =>:", list);

list = [];
root = deleteMethod(root, 13);
inorder(root);
console.log("After delete 13 =>:", list);

list = [];
root = deleteMethod(root, 11);
inorder(root);
console.log("After delete 11 =>:", list);

list = [];
root = deleteMethod(root, 9);
inorder(root);
console.log("After delete 9 =>:", list);
