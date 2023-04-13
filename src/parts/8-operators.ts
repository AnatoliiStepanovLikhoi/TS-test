interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;

const myName: PersonKeys = "name";

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt">;

type UserKeysNoMeta2 = Pick<User, "name" | "email">;

let user1: UserKeysNoMeta = "name";
