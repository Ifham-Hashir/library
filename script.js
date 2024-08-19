const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(Book, myLibrary) {
  const bookObj = new Book(prompt("title"), prompt("author"), prompt("pages"), prompt("status"));

  myLibrary.push(bookObj);
}

addBookToLibrary(Book, myLibrary);
addBookToLibrary(Book, myLibrary);
addBookToLibrary(Book, myLibrary);
console.log(myLibrary);