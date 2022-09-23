'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function BinarioADecimal(num) {
  // tu codigo aca
  let exponente = num.length - 1;
  let decimal = 0;

  for(let i = 0; i < num.length; i++){
    decimal += num[i] * Math.pow(2, exponente);
    exponente--;
  }
  
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = "";

  while(num !== 0){
    binario = (num % 2) + binario; // con esto te ahorrás de hacer un reverse al string luego del while
    num = Math.floor(num / 2)
  }
  return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}