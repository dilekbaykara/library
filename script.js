// Library Functions //

class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}

class Library {
  constructor() {
    this.books = []
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }

  getBook(title) {
    return this.books.find((book) => book.title === title)
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title)
  }
}

const library = new Library()

// User interface //
const popUpForm = document.querySelector(".form-popup");
const button = document.querySelector("#addBook");
const overlay = document.getElementById('overlay');

// Form Pop Up function //
document.getElementById('invisibleDiv').onclick = function()
{
   popUpForm.style.display = "none"; 
   overlay.style.display = "none";
};

button.addEventListener("click", () => {
  popUpForm.style.display = "block";
  overlay.style.display = "block";
});