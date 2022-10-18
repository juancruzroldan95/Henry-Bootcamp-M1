'use strict'
// No cambies los nombres de las funciones.

function partition (array) {
  let pivotIndex = array.length - 1;
  let i = 0;
  let j = 1;

  while (j < pivotIndex) {
    if (array[j] > array[pivotIndex]) {
      j++;
    }
    else {
      [array[j], array[i]] = [array[i], array[j]];
      i++;
      j++;
    }
  }
  [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
  return i;
}

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (1 < array.length) {
    let pivotIndex = partition(array);
    let leftArray = array.slice(0, pivotIndex);
    let rightArray = array.slice(pivotIndex + 1, array.length - 1);
    quickSort(leftArray);
    quickSort(rightArray);
  }
  return array;
}

quickSort([5, 1, 4, 2, 8]);

function merge (a,b) {
  var result = [];
  while (a.length >0 && b.length >0)
      result.push(a[0] < b[0]? a.shift() : b.shift());
  return result.concat(a.length? a : b);
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;
  var mid = Math.floor(array.length /2);
  var subLeft = mergeSort(array.slice(0,mid));
  var subRight = mergeSort(array.slice(mid));
  return merge(subLeft, subRight);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
