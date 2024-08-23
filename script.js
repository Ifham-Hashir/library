const addBtn = document.querySelector("#add-button");
const dialog = document.querySelector("dialog");
const confirmBtn = dialog.querySelector("#confirm-button");


const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(bookObj, myLibrary) {
  myLibrary.push(bookObj);
}

function displayBook(title, author) {
  const bookCard = document.createElement("p");
  document.body.appendChild(bookCard);
  bookCard.classList.add("book-card");
  bookCard.textContent = `Title: ${title} \n Author: ${author}`;
}

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  const title = document.getElementById("title").value === "" ? "No Title" : document.getElementById("title").value
  const author = document.getElementById("author").value === "" ? "No Author" : document.getElementById("author").value
  const bookObj = new Book(title, author);
  addBookToLibrary(bookObj, myLibrary);
  displayBook(title, author);
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

