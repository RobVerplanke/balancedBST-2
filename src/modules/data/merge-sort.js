// Sort numbers in order with the 'merge sort' algorithm

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return sortedArr.concat(leftArr.slice()).concat(rightArr.slice());
}

export default function mergeSort(array) {

  // base case
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);

  // recursive call
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
