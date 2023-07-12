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
