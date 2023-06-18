const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["hello", "world"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse(arrayOfNumbers));
reverse(arrayOfStrings);

class Flight<const T> {
  constructor(private dest: T[]) {}

  @test
  fly(to: T) {}

  @test
  fly2(to: T) {}
}

const flight = new Flight(["GB", "UA"]);
flight.fly("UA");

function test<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  return function (this: This, ...args: Args): Return {
    console.log("Start");
    const res = target.call(this, ...args);
    console.log("End");

    return res;
  };
}
