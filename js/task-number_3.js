const findBestEmployee = (employees) => {
  let bestEmployee = "";
  let bigestWorkValue = 0;
  for (const employeer in employees) {
    if (employees[employeer] > bigestWorkValue) {
      bigestWorkValue = employees[employeer];
      bestEmployee = employeer;
    }
  }
  return bestEmployee;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
