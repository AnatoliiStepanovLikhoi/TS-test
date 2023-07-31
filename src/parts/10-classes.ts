interface IClassUser {
  name: string;
  surname: string;

  printFullName(): string;
}

class User1 implements IClassUser {
  name: string;
  surname: string;
  protected secretMessage: string;
  //   private secretMessage: string;

  constructor(props: { name: string; surname: string }) {
    this.name = props.name;
    this.surname = props.surname;
    this.secretMessage = `${props.name} secret message`;
  }

  printFullName() {
    return `${this.name} ${this.surname}`;
  }

  protected getSecretMessage(): string {
    return this.secretMessage;
  }

  printSecretMessage(password: number): string | null {
    if (password === 123) {
      return this.secretMessage;
    }

    return null;
  }
}

const mySuperUser = new User1({
  name: "Vova",
  surname: "Shved",
});

// console.log(mySuperUser);
// console.log(mySuperUser.printSecretMessage(123));

interface IClassCustomer extends IClassUser {
  bill: number;
}

class Customer extends User1 {
  bill: number;

  constructor(props: IClassCustomer) {
    super({
      name: props.name,
      surname: props.surname,
    });
    this.bill = props.bill;
  }

  getBill(): string {
    return `${super.getSecretMessage()} ${this.bill}`;
  }
}
const mySuperCustomer = new Customer({
  name: "Sara",
  surname: "Shved",
  bill: 10000,
  printFullName: function () {
    return `${this.name} ${this.surname}`;
  },
});

console.log(mySuperCustomer.getBill());
