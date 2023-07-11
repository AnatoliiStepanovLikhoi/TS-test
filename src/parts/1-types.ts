const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "hello typescript";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["hello", "typescript"];

//Tuple
const contact: [string, number] = ["Kolya", 380442402020];

//Any
let variable: any = 42;
variable = "new string";
variable = [];

//====

export function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Stas");

//Never

function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

//Type

type Login = string;

const login: Login = "admin";
// const login2: Login = 2

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true;

type SomeType = string | null | undefined;

//Own Types

let ageWithType: number = 22;
ageWithType = 18;

let testBoolean: boolean;
testBoolean = true;

let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";

//Arrays

let names = ["john", "sara", "tom"];
names.push("vova");

let numbers = [11, 17, 35];
// numbers.push("mike");
numbers.push(13);

let testStringArray: string[];
// testStringArray = [1, 2, 3];
testStringArray = ["john", "sara", "tom"];

let testNumberArray: number[];
testNumberArray = [1, 2, 3];

let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, "two", 3];

//Objects

let user = {
  name: "john",
  age: 22,
  isAdmin: false,
};
user.name = "jane";
// user.age = "twenty two";
user.age = 22;
// user.isAdmin = 'no'
user.isAdmin = false;

// user.phone = "0442400240";

let userObj: {
  name: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  name: "john",
  age: 23,
  isAdmin: true,
};

let userObj2: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  name: "john",
  age: 23,
  isAdmin: true,
  phone: "0442400240",
};

//ANY

let testAny: any;

testAny = 12;
testAny = "Hello";
testAny = [true];

let testAnyArray: any[];
testAnyArray = [1, "two", false, []];
