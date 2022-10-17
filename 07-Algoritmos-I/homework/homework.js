'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let divisor = 2;
  while (num > 1) {
    if (num % divisor === 0) {
      arr.push(divisor);
      num /= divisor;
    }
    else
      divisor++;
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        flag = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let step = 1; step < array.length; step++) {
    let key = array[step];
    let j = step - 1;
    while (key < array[j] && j >= 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let step = 0; step < array.length; step++) {
    let minimum_index = step;
    for (let i = step + 1; i < array.length; i++) {
      if (array[i] < array[minimum_index])
        minimum_index = i;
    }
    let aux = array[minimum_index];
    array[minimum_index] = array[step];
    array[step] = aux;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
