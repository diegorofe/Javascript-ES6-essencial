const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string:', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

// Transforma uma string em float. 
//OBS: Caso o número termine com ZERO ele será cortado. Casso deseje o zero no final usar p toFixed()
console.log('\nString convertida para float:', parseFloat('13.22'));

// Tranforma uma string em int
console.log('\nString convertida para int:', parseInt('13.20'));