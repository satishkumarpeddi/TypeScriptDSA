type MultiDimensionalArray = (number | MultiDimensionalArray)[];
let arr: MultiDimensionalArray = [
  1,
  2,
  3,
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
function isMultiDimensionalArray(
  value: number | MultiDimensionalArray
): value is MultiDimensionalArray {
  return Array.isArray(value);
}
function flatten(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n === 0) return arr;
  const result: number | MultiDimensionalArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (isMultiDimensionalArray(arr[i]) && n > 0)
      result.push(...flatten(arr[i] as MultiDimensionalArray, n - 1));
    else result.push(arr[i] as number);
  }
  return result;
}
console.log(flatten(arr, 2));
