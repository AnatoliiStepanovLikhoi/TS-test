interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30,
  },
  color: "#fffff",
};

const rect2: Rect = {
  id: "1234",
  size: {
    width: 10,
    height: 40,
  },
};

rect2.color = "green";
// rect2.id = '3232'

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=========

interface RectWithArea extends Rect {
  getArea: () => Number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 30,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

//=======

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

//========

interface Styles {
  [key: string]: string;
}

const css = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};

//Interface

interface IUser {
  name: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  name: "tom",
  email: "tom@gmail.com",
  age: 43,
  employeeId: 1,
};
