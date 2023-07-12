const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ["hello", "world"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

console.log(reverse(arrayOfNumbers));
reverse(arrayOfStrings);

// class Flight<const T> {
//   constructor(private dest: T[]) {}

//   @test
//   fly(to: T) {}

//   @test
//   fly2(to: T) {}
// }

// const flight = new Flight(["GB", "UA"]);
// flight.fly("UA");

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

//Generics

interface iAuthor {
  id: number;
  name: string;
}

interface iCategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: iAuthor[] | iCategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<iAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, name: "john" }],
};

const testMe3: IPostEvenBetter<iCategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "category" }],
};
