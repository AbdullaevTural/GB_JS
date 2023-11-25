const metrikaWrapper = (func) => {
  // Object to store the unique users
  const uniqueUsers = {};

  return (credentials, ...args) => {
    // Checking if the login and password are valid
    if (
      typeof credentials.login !== 'string' ||
      credentials.login.trim() === '' ||
      typeof credentials.password !== 'string' ||
      credentials.password.trim() === ''
    ) {
      // Returning the current stored number of unique users
      return Object.keys(uniqueUsers).map((date) => ({
        date,
        users: Object.keys(uniqueUsers[date]).length,
      }));
    }

    // Checking if the date object is valid
    if (!(credentials.date instanceof Date)) {
      throw new Error('Invalid date');
    }

    const currentDate = credentials.date.toISOString().split('T')[0];

    // Adding the user to the unique users count
    if (!uniqueUsers[currentDate]) {
      uniqueUsers[currentDate] = {};
    }

    const userIdentifier = `${credentials.login}-${credentials.password}`;

    if (!uniqueUsers[currentDate][userIdentifier]) {
      uniqueUsers[currentDate][userIdentifier] = 1;
    } else {
      uniqueUsers[currentDate][userIdentifier]++;
    }

    // Calling the provided function
    func(...args);

    // Returning the current stored number of unique users
    return Object.keys(uniqueUsers).map((date) => ({
      date,
      users: Object.keys(uniqueUsers[date]).length,
    }));
  };
};

const wrappedFunc = metrikaWrapper(() => console.log("called"));

console.log(
  wrappedFunc({ login: "a", password: "a", date: new Date("2023-06-28") })
);

console.log(
  wrappedFunc({ login: NaN, password: "a", date: new Date("2023-06-28") })
);

console.log(wrappedFunc({ login: "c", date: new Date("2023-06-28") }));


console.log(wrappedFunc({ login: 'a', password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc({ login: 'b', password: 'a', date: new Date('2023-06-28')}));

console.log(wrappedFunc({ login: 'c', password: 'c', date: new Date('2023-06-28')}));