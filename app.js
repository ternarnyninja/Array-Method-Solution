// 1. Реализовать ф-цию, которая принимает массив и число n.
//  Ф-ция должна переставить n элементов массива из конца в начало. 

function moveToStart(array, num){
  let start;
  let end;
  if(num >= array.length){
    return array.slice();
  } else {
    start = array.slice(0, array.length - num);
    end = array.slice(array.length - num);
  }

  return end.concat(start);
}

// 2. Реализовать ф-цию, которая принимает массив данных разных типов и возвращает true, если
// этот массив содержит массив внутри себя.

function hasArray(array) {
  return array.some(item => Array.isArray(item) ? true : false);
}

// 3. Реализовать ф-цию, которая принимает массив и строку,
//  должна вернуть новый массив, состоящий из четных/нечетных чисел в зависимости от аргумента. 

function getNumbersByParity(array, str){
  return (str === "even") ? array.filter(e => e % 2 === 0) : array.filter(e => e % 2 !== 0);
}

// 4. Реализовать ф-цию (с использованием рекурсии) которая находит сумму последовательных целых чисел. 

function sequenceSum(begin, end){
  if(begin > end){
    return NaN;
  }
  if(begin === end){
    return begin;
  } else {
    return begin + sequenceSum(begin + 1, end);
  }
}

// 5. Реализовать ф-цию (с использованием рекурсии), которая принимает массив или объект 
// и считает кол-во строк в массиве / значения объекта с учетом вложенности. 

function getStringCount(object) {
  if(typeof object == "string") return 1;

  if(!object) return 0;

  return Object.values(object).reduce((a,b) => a + getStringCount(b), 0);
};