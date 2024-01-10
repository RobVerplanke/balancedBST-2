const ammountOfNumbers = 20;

// Fill a Set with unique random numbers < 100
function fillSet() {
  const numbersList = new Set();

  while (numbersList.size < ammountOfNumbers) {
    numbersList.add(Math.floor(Math.random() * 100));
  }

  return numbersList;
}

// Get array with numbers
export default function getNumbers() {
  return Array.from(fillSet());
}
