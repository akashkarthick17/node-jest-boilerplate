function getSumOfArray(arr) {
  let sum = 0;
  let negativeNumbers = '';
  arr.forEach((number) => {
    if (+number < 0) {
      negativeNumbers += number;
    } else if (number > 1000) {
      sum += 0;
    } else {
      sum += +number;
    }
  });

  return { sum, negativeNumbers };
}

function getNewLineIndex(numbers) {
  return numbers.indexOf('\n');
}

function getNumbersWithoutDelimiter(numbers, newLineIndex) {
  return numbers.substr(newLineIndex);
}

function getDelimiter(numbers, newLineIndex) {
  return numbers.substring(2, newLineIndex);
}

function calculateSum(numbers, delimiter) {
  let numArr = numbers.split(',');
  numArr = numArr.join(' ').split('\n');
  if (delimiter) {
    numArr = numArr.join(' ').split(delimiter);
  }
  numArr = numArr.join(' ');
  numArr = numArr.split(' ');

  const { sum, negativeNumbers } = getSumOfArray(numArr);

  if (negativeNumbers.length > 0) {
    throw Error('negatives not allowed: ' + negativeNumbers);
  } else {
    return sum;
  }
}

function extractErrorMessage(error) {
  return error.toString().split('Error: ')[1];
}

function getNumbersAndDelimiter(numbers) {
  const newLineIndex = getNewLineIndex(numbers);
  const delimiter = getDelimiter(numbers, newLineIndex);
  const numbersWithoutDelimiter = getNumbersWithoutDelimiter(
    numbers,
    newLineIndex
  );

  return { numbersWithoutDelimiter, delimiter };
}

module.exports = (numbers) => {
  let sum = 0;
  try {
    if (numbers.startsWith('//')) {
      const { numbersWithoutDelimiter, delimiter } = getNumbersAndDelimiter(
        numbers
      );
      sum = calculateSum(numbersWithoutDelimiter, delimiter);
    } else {
      sum = calculateSum(numbers);
    }
    return sum;
  } catch (error) {
    return extractErrorMessage(error);
  }
};
