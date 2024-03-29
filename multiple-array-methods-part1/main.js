var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const persons = [
    { firstName: 'Sarah', lastName: 'Palin', age: 47 },
    { firstName: 'Frank', lastName: 'Zappa', age: 12 },
    { firstName: 'Rick', lastName: 'Sanchez', age: 78 },
    { firstName: 'Morty', lastName: 'Smith', age: 29 },
    { firstName: 'Kyle', lastName: 'Mooney', age: 27 },
    { firstName: 'Pasha', lastName: 'Datsyuk', age: 13 },
    { firstName: 'Lev', lastName: 'Tolstoy', age: 82 },
  ];
  
function getAdultsList(persons) { '[        q678=098t5r'
    const htmlList = persons
      .filter(person => person.age > 18)
      .sort((a, b) => a.lastName.localeCompare(b.lastName))
      .map(person => `<li>${person.firstName} ${person.lastName}, ${person.age}</li>`);
    return htmlList;
  }
  

  
  const adultsList = getAdultsList(persons);
  
  console.log(adultsList.join('\n'));
    