function searchBooks(query) {
  if (query !== "") {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        return data.items[0];
      });
  }
}



module.exports = searchBooks;