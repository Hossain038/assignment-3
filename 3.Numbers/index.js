function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Number is divisible, not prime
      }
    }
  
    return true; // Number is prime
  }
document.write(isPrime(7)+"<br>");  // true
document.write(isPrime(10)+"<br>"); // false
document.write(isPrime(13)+"<br>"); // true
document.write(isPrime(1)+"<br>");  // false
