/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1 - Crie a função compareTrue
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 3 - Crie a função concatName
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  let number = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > number) {
      number = array[index];
    }
  }
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      count += 1;
    }
  }
  return count;
}
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return base * height;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    area = (base * height) / 2;
    return `O valor da área do triângulo é de: ${area}`;
  }
  if (form === 'retângulo') {
    area = base * height;
    return `O valor da área do retângulo é de: ${area}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}
// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const distCat1 = Math.abs(cat1 - mouse);
  const distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 < distCat2) {
    return 'cat1';
  }
  if (distCat2 < distCat1) {
    return 'cat2';
  }
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(array) {
  let newNumber = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newNumber.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      newNumber.push('buzz');
    } else if (array[index] % 3 === 0) {
      newNumber.push('fizz');
    } else {
      newNumber.push('bug!');
    }
  }
  return newNumber;
}
// Desafio 9 - Crie a função encode e a função decode
function encode(string) {
  return string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4')
    .replace(/u/g, '5');
}
function decode(string) {
  return string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
}

// Desafio 10 - Crie a função techList
function techList(tecnologies, name) {
  tecnologies.sort();
  const list = [];
  for (let index = 0; index < tecnologies.length; index += 1) {
    list.push({ tech: tecnologies[index], name });
  } return list;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
