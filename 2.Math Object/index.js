function displaySquareRootOfSumOfSquares(numbers) {
    let sumOfSquares = 0;
  
    // Calculate the sum of squares
    for (let i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
  
    // Calculate the square root of the sum of squares
    const result = Math.sqrt(sumOfSquares);
  
    // Display the square root of the sum of squares
    document.write(`The square root of the sum of squares is: ${result}`);
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
//a


  displaySquareRootOfSumOfSquares(numbers);
  //b
  