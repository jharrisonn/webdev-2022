// ==========================================================================================
// Autor: Jorge Harrisonn Mantovanelli Thomes Vieira (github: jharrisonn)
// ==========================================================================================
// Use `console.log(variavel)` para verificar suas respostas no Console
// do Inspetor da Web do navegador.

// ==========================================================================================
// 1. Gere uma lista contendo apenas os números pares (filter)
const numeros = [1, 4, 10, 23, 26, 27, 29, 30, 311, 320, 4490];
const pares = numeros.filter(value => {return value%2 == 0});
console.log(`1 :: ${pares}`);

// ==========================================================================================
// 2. Faça uma lista que possua apenas frutas com quatro letras (filter)
// Dica: você pode usar 'string'.length para verificar a quantidade de
// caracteres de uma string.
const frutas = [
  'maçã', 'banana', 'pera', 'uva', 'coco', 'caqui', 'kiwi', 'acerola'
];
const frut = frutas.filter(fruta => fruta.length == 4);
console.log(`2 :: ${frut}`);

// ==========================================================================================
// 3. Maiusculize os nomes dados (map)
// Dica: Maiusculizar é escrever cada palavra com a inicial em
// maiúsculo. Você pode conferir todos os métodos de String em:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
const nomes = ['cecília', 'roberto', 'bruna', 'Osvaldo', 'Carlos'];
const Nomes = nomes.map(nome => `${nome[0].toUpperCase()}${nome.slice(1)}`);
console.log(`3 :: ${Nomes}`);

// ==========================================================================================
// 4. Concatene os nomes e sobrenomes da lista (map)
const nomesESobrenomes = [
  ['Fernanda', 'Montenegro'],
  ['Lázaro', 'Ramos'],
  ['Heloísa', 'Périssé'],
  ['Daniel', 'Furlan'],
  ['Adriana', 'Esteves'],
]

const nomesCompletos = nomesESobrenomes.map(nes => `${nes[0]} ${nes[1]}`);
console.log(`4 :: ${nomesCompletos}`);

// ==========================================================================================
// 5. Calcule a média das notas (reduce)
const notas = [7, 5, 4, 3, 8.5];
const media = notas.reduce((prev, atual, i) => { return (i * prev + atual) / (i + 1) });
console.log(`5 :: ${media}`);

// ==========================================================================================
// 6. Calcule a média ponderada das notas (reduce)
// Cada item da lista é composto por uma sublista com a nota (na
// primeira posição) e o peso (na segunda posição).

const notasComPeso = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]]
let peso = 0;

const mediaPonderada = notasComPeso.reduce((prev, atual, i) => { 
  let val = ( peso * prev + atual[1] * atual[0] ) / (peso + atual[1]);
  peso += atual[1];
  return val;
}, 0);

console.log(`6 :: ${mediaPonderada}`);

// ==========================================================================================
// 7. (Extra) Refaça o exercício 6 tirando as duas menores notas. Dica:
// Lembre dos métodos sort e slice.
const notasComPeso2 = [[7, 2], [5, 1], [4, 2], [3, 1], [8.5, 2]]
peso = 0;

const mediaPonderada2 = notasComPeso2.sort((a, b) => a[0] - b[0]).slice(2).reduce((prev, atual, i) => { 
  let val = ( peso * prev + atual[1] * atual[0] ) / (peso + atual[1]);
  peso += atual[1];
  return val;
}, 0);

console.log(`7 :: ${mediaPonderada2}`);
