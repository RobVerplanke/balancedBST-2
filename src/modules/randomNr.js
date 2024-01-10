const ammountOfNumbers = 20;

// Fill a set with unique random numbers < 100
export default function getNumbers() {
  const numbersList = new Set();

  while (numbersList.size < ammountOfNumbers) {
    numbersList.add(Math.floor(Math.random() * 100));
  }

  // Convert set to array
  return Array.from(numbersList);
}
