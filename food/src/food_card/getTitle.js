function modulo(num1, num2) {
  var dividend = num1;
  var divisor = num2;


  if ( divisor === 0 ) {
    return 0;
  }

  if ( divisor < 0 ) {
    divisor = divisor * -1;
  }

  if ( dividend < 0 ) {
    dividend = dividend * -1;
  }

  var i = 1;
  var product = 0;

  while ( product <= dividend ) {
    product = divisor * i;
    i++;
  }

  //remainder should be 1 because it is one whole number away from the answer
  return dividend - (product - divisor);
}

console.log(modulo(25,4));