const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4MGQxNjFhLWUwODQtNGRmZi05ZWUyLWRjYzc5MmQ3MTQwYS0xNzIyNDI5NDA3NjMzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZWNiZWM4MjYtYjEwNy00ZGIxLTg5MzgtYzVlODI4ODkxNDgzIiwidHlwZSI6InQifQ.Mf6W2I3nuusyReznzhp0snEP6t7NxlYYayWhEgUwPSo';

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
