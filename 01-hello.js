console.log("Hello");

// process.env;

const movies = [
  { id: 12, name: "Lion King" },
  { id: 13, name: "Shakespeare" },
];

const foundMovie = movies.find(function (m) {
  return m.id == 100;
});

console.log(foundMovie);
