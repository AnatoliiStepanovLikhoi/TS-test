function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2);
  }

  return x.trim();
}

class MyResponce {
  header = "responce header";
  result = "responce result";
}

class MyError {
  header = "error header";
  message = "error message";
}

function handle(res: MyResponce | MyError) {
  if (res instanceof MyResponce) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

//============

type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
  //====
}

setAlertType("success");
// setAlertType('default')

//==============

interface User777 {
  name: string;
}
interface Human extends User777 {
  speak(): void;
}

interface Animal extends User777 {
  color: string;
}

const serverInfo: Human = {
  name: "Vovka",
  speak: () => {
    console.log("Hello");
  },
};

function isHuman(serverInfo: User777): serverInfo is Human {
  return typeof (serverInfo as Human).speak === "function";
}
