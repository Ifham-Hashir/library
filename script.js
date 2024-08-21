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

// addBookToLibrary(Book, myLibrary);
// addBookToLibrary(Book, myLibrary);

console.log(myLibrary);

function displayBook(myLibrary) {
  for(let i = 0; i < myLibrary.length; i++){
    const bookCard = document.createElement("div");
    document.body.appendChild(bookCard);
    bookCard.textContent += myLibrary[i].title + " | " + myLibrary[i].author + " | " + myLibrary[i].pages + " | " + myLibrary[i].status + " | ";
  }
    
}

// displayBook(myLibrary);

const addNewBtn = document.querySelector("#showDialog");
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector("#close");

addNewBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});