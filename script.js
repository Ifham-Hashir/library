const addBtn = document.querySelector("#add-button");
const dialog = document.querySelector("dialog");
const confirmBtn = dialog.querySelector("#confirm-button");
const container = document.querySelector(".container");


const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookObj, myLibrary) {
  myLibrary.push(bookObj);
}

function displayBook(title, author, pages, read) {

  const index = myLibrary.length-1;

  const bookCard = document.createElement("div");
  bookCard.setAttribute("data-index", `${index}`);
  container.appendChild(bookCard);
  bookCard.classList.add("book-card");
  bookCard.textContent = `Title: ${title} \n\n Author: ${author} \n\n Pages: ${pages} \n\n Status: ${read} \n\n`;

  const removeBtn = document.createElement("button");
  bookCard.appendChild(removeBtn);
  removeBtn.textContent = "Remove";

  const changeStatusBtn = document.createElement("button");
  bookCard.appendChild(changeStatusBtn);
  changeStatusBtn.textContent = "Change Status";
}

addBtn.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  const title = document.getElementById("title").value === "" ? "No Title" : document.getElementById("title").value

  const author = document.getElementById("author").value === "" ? "No Author" : document.getElementById("author").value

  const pages = document.getElementById("pages").value === "" ? "0" : document.getElementById("pages").value

  const read = document.querySelector('input[name="read"]').checked === true ? "Read" : "Not Read";

  const bookObj = new Book(title, author, pages, read);
  addBookToLibrary(bookObj, myLibrary);
  displayBook(title, author, pages, read);
  document.querySelector("form").reset();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

