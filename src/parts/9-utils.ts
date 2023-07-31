// const num: number = 10;
// console.log(num);

interface Accomodation {
  title: string;
  location: string;
  address: string;
  room: number;
}

const mySimpleAccomodation: Pick<Accomodation, "title" | "address"> = {
  title: "Hotel",
  address: "Khreshatyk",
};

const array2: ReadonlyArray<number> = [1, 2, 3];

const myFloatAccomodation: Partial<Accomodation> = {
  title: "GuestHouse",
};

const myReqiuredAccomodation: Required<Accomodation> = {
  title: "GuestHouse",
  location: "kyiv",
  address: "shevcheka",
  room: 123,
};
