// Desafio 11 - Crie a função generatePhoneNumber
function validateNumbers(number, array){
  let count = 0;
  for(let index = 0; index < array.length; index += 1){
    if(array[index] === number){
      count += 1
    }
  }
return count
}
function generatePhoneNumber(numbers) {
if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    const counter =  validateNumbers(numbers[index], numbers)
     if( counter >= 3 || numbers[index] < 0 || numbers[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
     }   
  let phoneNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`  
  return phoneNumber;
  }
}
// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
