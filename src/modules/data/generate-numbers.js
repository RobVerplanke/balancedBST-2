import mergeSort from './merge-sort.js';

// Create a set with unique random numbers < 100
export default function getNumbers(ammount) {
  const numbersList = new Set();

  while (numbersList.size < ammount) {
    numbersList.add(Math.floor(Math.random() * 100));
  }

  // Convert set to array and sort it
  return mergeSort(Array.from(numbersList));
}
