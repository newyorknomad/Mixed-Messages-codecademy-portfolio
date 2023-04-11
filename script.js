const partA = ['You shall ', 'He shall ', 'We shall ', 'She shall '];
const partB = ['die ', 'live ', 'laugh ', 'love '];
const partC = ['horribly!', 'forever!', 'never!', 'alone.'];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };
console.log(partA[getRandomInt(3)] + partB[getRandomInt(3)] + partC[getRandomInt(3)]);