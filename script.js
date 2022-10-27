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

// User interface //
const popUpForm = document.querySelector(".form-popup");
const button = document.querySelector("#addBook");
const overlay = document.getElementById('overlay');


document.getElementById('invisibleDiv').onclick = function()
{
   popUpForm.style.display = "none"; 
   overlay.style.display = "none";
};


button.addEventListener("click", () => {
  popUpForm.style.display = "block";
  overlay.style.display = "block";
});