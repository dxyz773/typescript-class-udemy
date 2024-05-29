// Types:
// 1. number - includes integers and floats and negative numbers
// 2. string - text
// 3. boolean - true, false
// 4. object -

function add(
  num1: number,
  num2: number,
  showResult: boolean,
  showResultPhrase: string
) {
  const result = num1 + num2;
  if (showResult) {
    console.log(showResultPhrase + result);
  } else {
    return result;
  }
}
// let numTest: number;
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "The Result is ";

add(number1, number2, printResult, resultPhrase);
// console.log(result);
