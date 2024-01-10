// Return an array of random numbers < 100

const ammount = 20;
const numbersList = [];

for (let i = 0; i < ammount; i++) {
  numbersList.push(Math.floor(Math.random() * 100));
}

export default { numbersList };
