const metrikaWrapper = (func) => {
  const uniqueLogins = new Set();
  let date;
  let users = 0;

  return (Credentials, ...args) => {
    if (
      Credentials.login &&
      typeof Credentials.login === "string" &&
      Credentials.login !== "" &&
      Credentials.password &&
      typeof Credentials.password === "string" &&
      Credentials.password !== ""
    ) {
      uniqueLogins.add(Credentials.login);
      date = Credentials.date.toISOString().split("T")[0];
      users = uniqueLogins.size;
      const result = [{ date: date, users: users }];
      return result;
    }

    if (typeof func === "function") {
      func(...args);
    }

    if (date && users > 0) {
      return [{ date: date, users: users }];
    }
  };
};

const wrappedFunc = metrikaWrapper(() => console.log("called"));


console.log(
  wrappedFunc({ login: "a", password: "a", date: new Date("2023-06-29") })
);

console.log(
  wrappedFunc({ login: "a", password: "a", date: new Date("2023-06-28") })
);

console.log(wrappedFunc({ login: "c", date: new Date("2023-06-28") }));
