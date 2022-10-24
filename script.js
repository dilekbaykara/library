/* let myLibrary = [];
function Book() {
  // the constructor...
}
function addBookToLibrary() {
  // do stuff here
}

function newBook(title,author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

newBook.prototype.info = function() {
  console.log()
} */


const popUpForm = document.querySelector(".form-popup");
const button = document.querySelector("#addBook");

button.addEventListener("click", () => {
  popUpForm.style.display = "block";
});