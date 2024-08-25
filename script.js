const addBtn = document.querySelector("#add-button");
const dialog = document.querySelector("dialog");
const confirmBtn = dialog.querySelector("#confirm-button");
const container = document.querySelector(".container");



const myLibrary = [];
addBookToLibrary("Data Structure With C", "Seymour Lipschutz", "956", "Not Read");
displayBook();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const bookObj = new Book(title, author, pages, read);
  myLibrary.push(bookObj);
}

function displayBook(){
  for(let i = myLibrary.length-1; i < myLibrary.length; i++){
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    container.appendChild(bookCard);
    bookCard.dataset.index = i;

    const bookTitle = document.createElement("div");
    bookCard.appendChild(bookTitle);
    bookTitle.textContent = `Title: ${myLibrary[i].title}`;

    const bookAuthor = document.createElement("div");
    bookCard.appendChild(bookAuthor);
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;

    const bookPages = document.createElement("div");
    bookCard.appendChild(bookPages);
    bookPages.textContent = `Pages: ${myLibrary[i].pages}`;

    const bookRead = document.createElement("div");
    bookCard.appendChild(bookRead);
    bookRead.textContent = `Status: ${myLibrary[i].read}`;
    
    const changeStatusBtn = document.createElement("button");
    bookCard.appendChild(changeStatusBtn);
    changeStatusBtn.textContent = "Change Status";

    changeStatusBtn.addEventListener("click", () => {
      if(myLibrary[i].read === "Read"){
        myLibrary[i].read = "Not Read";
        bookRead.textContent = `Status: ${myLibrary[i].read}`;
      }
      else if(myLibrary[i].read === "Not Read"){
        myLibrary[i].read = "Read";
        bookRead.textContent = `Status: ${myLibrary[i].read}`;
      }
    });

    const removeBtn = document.createElement("button");
    bookCard.appendChild(removeBtn);
    removeBtn.textContent = "Remove";
  
    removeBtn.addEventListener("click", () => {
      myLibrary[i] = null;
      bookCard.style.display = 'none';
      bookCard.textContent = "";
    });

  }

}



addBtn.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  title = document.getElementById("title").value === "" ? "No Title" : document.getElementById("title").value

  author = document.getElementById("author").value === "" ? "No Author" : document.getElementById("author").value

  pages = document.getElementById("pages").value === "" ? "0" : document.getElementById("pages").value

  read = document.querySelector('input[name="read"]').checked === true ? "Read" : "Not Read";

  addBookToLibrary(title, author, pages, read);
  document.querySelector("form").reset();
  displayBook();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
  console.log(myLibrary)
});
