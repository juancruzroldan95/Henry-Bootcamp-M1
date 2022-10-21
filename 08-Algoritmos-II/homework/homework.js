'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivot = array[0];
  let subLeft = [];
  let subRight = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      subLeft.push(array[i]);
    }
    else {
      subRight.push(array[i]);
    }
  }
  return quickSort(subLeft).concat(pivot).concat(quickSort(subRight));
}

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
  let mid = Math.floor(array.length /2);
  let subLeft = mergeSort(array.slice(0,mid));
  let subRight = mergeSort(array.slice(mid));
  return merge(subLeft, subRight);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
