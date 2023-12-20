const randomGen = num => {
  return Math.floor(Math.random() * num);
};

const godsMessages = {
    god: ['The Lord', 'God', 'Yaweh', 'Jesus'],
    isDoing: ['love', 'care about', 'adore', 'protect', 'strengthen'],
    who: ['you', 'your mom', 'your friends', 'your family', 'your dad', 'your pastor'],
};

let godsWisdom = [];

for(let prop in godsMessages) {
    let index = randomGen(godsMessages[prop].length)
    
    godsWisdom
      switch(prop) {
        case 'god':
            godsWisdom.push(`${godsMessages[prop][index]} will always`);
              break;
        case 'isDoing':
            godsWisdom.push(`${godsMessages[prop][index]}`);
              break;
        case 'who':
            godsWisdom.push(`${godsMessages[prop][index]}.`);
            break
        default:
            godsWisdom.push("something is wrong");
      }
}

const oneOutput = godsWisdom.join(" ");

console.log(oneOutput);

