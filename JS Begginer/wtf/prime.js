function isPrime(input) {
    let num = Number(input[0]);
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}
isPrime([2])
