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

///

function makeRequest<T>(url: string, returnedData: T, params?: Params): T {
  return returnedData;
}

interface User555 {
  name: string;
  surname: string;
}

interface Articles {
  title: string;
  author: string;
  content: string;
}

interface Params {
  query: {};
}

const user55: User555 = {
  name: "Sara",
  surname: "Connor",
};

const articles: Articles = {
  title: "Sara",
  author: "Connor",
  content: "Terminator",
};

const myUser = makeRequest<User555>("/getUsers", user55);

const myArticles = makeRequest<Articles>("/getArticles", articles);

///

interface User888<T, I> {
  type: T;
  name: string;
  surname: I;
}

const myuuuu: User888<number, string> = {
  type: 1231,
  name: "Vlad",
  surname: "Goodman",
};

type CustomerTypes = "new" | "angry" | "happy";

class WorkWithCustomer<T> {
  type: T;
  name: string;

  constructor(type: T, name: string) {
    this.type = type;
    this.name = name;
  }
}

const workWithCustomer = new WorkWithCustomer<CustomerTypes>("angry", "Vovka");

//extends

interface DefaultCustomer {
  type: "usual";
  name: "unknown";
}
interface MinPersonInfo {
  name: string;
}
function workWithPerson<T extends MinPersonInfo = DefaultCustomer>(
  args: T
): string {
  return args.name;
}

workWithPerson({ name: "vova" });
