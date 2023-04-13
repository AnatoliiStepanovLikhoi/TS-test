const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["hello", "world"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse(arrayOfNumbers));
reverse(arrayOfStrings);
