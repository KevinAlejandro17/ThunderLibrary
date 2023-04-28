const searchBooks = require("./search");

test("search-books", () => {
  expect(searchBooks("principito").then((book) => book)).toBe("El principito");
});

