// Library Functions //

let myLibrary = [];

class Book {
constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + 'pages';
    this.read = form.read.checked;
}
}

function addBookToLibrary(){

}


// User interface //
const popUpForm = document.querySelector(".form-popup");
const button = document.querySelector("#addBook");
const overlay = document.getElementById('overlay');
const booksGrid = document.getElementById('booksGrid');
const addBookForm = document.getElementById('addBookForm');
const bookCard = document.querySelector('.book-card');

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

const updateBooksGrid = () => {
  resetBooksGrid()
  for (let book of library.books) {
    createBookCard(book)
  }
}

// Card for grid function //
const createBookCard = (book) => {
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  const pages = document.createElement('p')
  const buttonGroup = document.createElement('div')
  const readBtn = document.createElement('button')
  const removeBtn = document.createElement('button')

  title.textContent = `"${book.title}"`
  author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  removeBtn.textContent = 'Remove'

  if (book.isRead) {
    readBtn.textContent = 'Read'
    readBtn.classList.add('submit');
  } else {
    readBtn.textContent = 'Not read'
    readBtn.classList.add('btn-light-red')
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  booksGrid.appendChild(bookCard)
}

const getBookFromInput = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('isRead').checked
  return new Book(title, author, pages, isRead)
}


const addBtn = document.querySelector("#submit");
addBtn.addEventListener('click', createBookCard);
