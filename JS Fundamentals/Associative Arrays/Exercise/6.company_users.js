function comapanyUsers(input) {
  let companies = {};

  for (const line of input) {
    let [name, id] = line.split(` -> `);
    if (!companies[name]) {
      companies[name] = [id];
    } else {
        if (!companies[name].includes(id)) {
            companies[name].push(id);
        }
    }
  }

  let sortedCompanies = Object.entries(companies)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([key, value]) => {
      console.log(key);
      value.forEach((element) => {
        console.log(`-- ${element}`);
      });
    });
}

comapanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);
