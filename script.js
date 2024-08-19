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

console.log(myLibrary);

function displayBook(myLibrary) {
  for(let i = 0; i < myLibrary.length; i++){
    const bookCard = document.createElement("div");
    document.body.appendChild(bookCard);
    bookCard.textContent += Object.values(myLibrary[i]).join(" ");
  }
    
}

displayBook(myLibrary);