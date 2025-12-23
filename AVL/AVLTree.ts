class TreeNodeStructure {
  val: number;
  left: TreeNodeStructure | null;
  right: TreeNodeStructure | null;
  height: number;
  constructor(
    val?: number,
    left?: TreeNodeStructure | null,
    right?: TreeNodeStructure | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.height = 0;
  }
}
let root: TreeNodeStructure | null = null;
const elements: number[] = [3, 5, 18, 9, 19, 11, 12, 99, 14, 51];
const delelements: number[] = [3, 5, 18];
let height = (root: TreeNodeStructure | null): number => {
  if (root === null) return 0;
  return root.height;
};
let balanaceFactor = (root: TreeNodeStructure | null): number => {
  if (root === null) return 0;
  return height(root.left) - height(root.right);
};
let rightRotation = (y: TreeNodeStructure | null): TreeNodeStructure => {
  if (y === null) throw new Error("y is null");
  let x = y?.left;
  if (x === null) throw new Error("x is null");
  let T2 = x?.right;
  y.left = T2;
  x.right = y;
  x.height = 1 + Math.max(height(x.left), height(x.right));
  y.height = 1 + Math.max(height(y.left), height(y.right));
  return x;
};
let leftRotation = (x: TreeNodeStructure | null): TreeNodeStructure => {
  if (x === null) throw new Error("x is null");
  let y = x?.right;
  if (y === null) throw new Error("y is null");
  let T2 = y?.left;
  y.left = x;
  x.right = T2;
  x.height = 1 + Math.max(height(x.left), height(x.right));
  y.height = 1 + Math.max(height(y.left), height(y.right));
  return y;
};
let insert = (
  root: TreeNodeStructure | null,
  key: number | 0
): TreeNodeStructure => {
  if (root == null) return new TreeNodeStructure(key);
  if (key < root.val) {
    root.left = insert(root.left, key);
  } else if (key > root.val) {
    root.right = insert(root.right, key);
  } else {
    return root;
  }
  root.height = 1 + Math.max(height(root.left), height(root.right));
  let balanaceFactorValue = balanaceFactor(root);
  if (root.left && balanaceFactorValue > 1 && key < root.left.val) {
    return rightRotation(root);
  }

  if (root.right && balanaceFactorValue < -1 && key > root.right.val) {
    return leftRotation(root);
  }
  if (root.left && balanaceFactorValue > 1 && key > root.left.val) {
    root.left = leftRotation(root.left);
    return rightRotation(root);
  }
  if (root.right && balanaceFactorValue < -1 && key < root.right.val) {
    root.right = rightRotation(root.right);
    return leftRotation(root);
  }
  return root;
};
let minValueNode = (root: TreeNodeStructure | null): TreeNodeStructure => {
  let curr: TreeNodeStructure | null = root;
  while (curr && curr.left != null) curr = curr.left;
  if (curr) return curr;
  return new TreeNodeStructure(0);
};
let deleteMethod = (
  root: TreeNodeStructure | null,
  key: number | 0
): TreeNodeStructure => {
  if (root == null) {
    return new TreeNodeStructure();
  }
  if (key < root.val) {
    root.left = deleteMethod(root.left, key);
  } else if (key > root.val) {
    root.right = deleteMethod(root.right, key);
  } else {
    if (root.left === null) if (root.right) return root.right;
    if (root.right === null) if (root.left) return root.left;
    const node = minValueNode(root.right);
    root.val = node.val;
    root.right = deleteMethod(root.right, node.val);
  }
  root.height = 1 + Math.max(height(root.left), height(root.right));
  let balanceFactorValue = balanaceFactor(root);
  if (balanceFactorValue > 1 && balanaceFactor(root.left) >= 0) {
    return rightRotation(root);
  }
  if (balanceFactorValue < -1 && balanaceFactor(root.right) <= 0) {
    return leftRotation(root);
  }
  if (balanceFactorValue > 1 && balanaceFactor(root.left) < 0) {
    root.left = leftRotation(root.left);
    return rightRotation(root);
  }
  if (balanceFactorValue < -1 && balanaceFactor(root.right) > 0) {
    root.right = rightRotation(root.right);
    return leftRotation(root);
  }
  return root;
};
let insertUtil = (elements: number[]): void => {
  for (let element of elements) {
    root = insert(root, element);
  }
};
let deleteMethodUtil = (elements: number[]): void => {
  for (let element of delelements) {
    root = deleteMethod(root, element);
  }
};
let inOrderList: number[] = [];
let levelOrderList: number[] = [];
let preOrderList: number[] = [];
let postOrderList: number[] = [];
insertUtil(elements);
const inorderTraversal = (root: TreeNodeStructure | null): void => {
  if (root == null) return;
  inorderTraversal(root.left);
  if (root.val !== 0) inOrderList.push(root.val);
  inorderTraversal(root.right);
};
const preorderTraversal = (root: TreeNodeStructure | null): void => {
  if (root == null) return;
  if (root.val !== 0) preOrderList.push(root.val);
  preorderTraversal(root.left);
  preorderTraversal(root.right);
};
const postorderTraversal = (root: TreeNodeStructure | null): void => {
  if (root == null) return;
  postorderTraversal(root.left);
  postorderTraversal(root.right);
  if (root.val !== 0) postOrderList.push(root.val);
};
const levelorderTraversal = (root: TreeNodeStructure | null): void => {
  if (root == null) return;
  const queue: TreeNodeStructure[] = [root];
  while (queue.length > 0) {
    let levelSize: number = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node: TreeNodeStructure | undefined = queue.shift();
      if (node != undefined) if (node.val != 0) levelOrderList.push(node.val);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
  }
};
console.log("The following are various types of traversal on AVL Tree : ");
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

console.log(
  "The following are various types of traversal on AVL Tree after deletion : "
);
deleteMethodUtil(delelements);
inOrderList = [];
preOrderList = [];
postOrderList = [];
levelOrderList = [];
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
