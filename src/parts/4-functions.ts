export function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
// function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log(position());
// console.log(position(42));
console.log(position(10, 15));

//FUNCTIONS

let sayHi = () => {
  console.log("Hi, welcome");
};

// sayHi();

let functionReturnString = (): string => {
  return "typescript";
};

let multiple = (num: number) => {
  return num * 2;
};

// let multiple2 = (num: number):void => {
//   return num * 2;
// };

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

console.log(sum(2, 4));

//Type Aliases

type UserType = {
  name: string;
  age: number;
  phone?: string;
};
let betterFunc = (user: UserType) => {
  console.log(user.name);
};

type myFunc = (a: number, b: string) => void;
let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type UserType2 = {
  name: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};
const userWithTheme: UserType2 = {
  name: "Vova",
  age: 43,
  theme: "dark",
};

///Functions

const fn1 = (num: number): string => {
  return String(num);
};

type Callback = (num: number) => string;

function fn2(cb?: Callback) {
  if (cb === undefined) {
    cb = String;
  }

  cb(12);
}

function createPoint(x = 0, y = 0): [number, number] {
  return [x, y];
}

createPoint(10);

function fn3(...nums: number[]): string {
  return nums.join("-");
}

interface Printable {
  label: string;
}

function printReport(obj: Printable): void {
  console.log(obj.label);
}

const drink = {
  label: "coke",
  price: 90,
};

const phone = {
  label: "Nokia",
  price: 1000,
};

printReport(drink);
printReport(phone);

// printReport({ label: "", price: 100 });

//Reloads

function pickCard(x: number): { suit: string; card: number };
function pickCard(x: number | { suit: string; card: number }[]): number;

function pickCard(x): any {
  if (typeof x === "object") {
    let card = Math.floor(Math.random() * x.length);
    return card;
  } else if (typeof x === "number") {
    return { suit: "", card: x % 13 };
  }
}

pickCard([{ suit: "abc", card: 5 }]);
