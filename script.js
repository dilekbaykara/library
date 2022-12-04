// User interface //
const bookCard = document.querySelector('.book-container');
const popUpForm = document.querySelector('.form-popup');
const button = document.getElementById('addBook');
const overlay = document.getElementById('overlay');
const booksGrid = document.getElementById('books-grid');
const form = document.querySelector('form-container');
const submitBtn = document.getElementById('submit');
const buttonGroup = document.querySelector('button-group');
const removeBtn = document.querySelector('remove');
bookCard.style.display = "none";


// Form Pop Up function //
document.getElementById('invisibleDiv').onclick = function() {
  popUpForm.style.display = "none";
  overlay.style.display = "none";
};

button.addEventListener("click", () => {
  popUpForm.style.display = "block";
  overlay.style.display = "block";
});


// Book Class : Represents a Book //
class Book {
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages + ' pages';
    this.read = read;
  }
}


//UI Class : Handle UI tasks
class UI {
  static displayBooks() {
    booksGrid.innerHTML = ''; // clear the books before you add them all back
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToLibrary(book));
    popUpForm.style.display = "none";
    overlay.style.display = "none";
  }

  static addBookToLibrary(book) {
    const bookCard = document.createElement('div');
    const removeBtn = document.createElement('button');
    const buttonGroup = document.createElement('div');


    bookCard.classList.add('book-container');
    buttonGroup.classList.add('button-group');
    removeBtn.classList.add('remove');


    bookCard.innerHTML = `
      <p class="id" style="display:none;">${book.id}</p>
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      `;

    removeBtn.innerHTML = `
      <p>Remove</p>`;

    bookCard.appendChild(buttonGroup);
    buttonGroup.appendChild(removeBtn);
    booksGrid.appendChild(bookCard);
  }

  static deleteBook(el) {
    el.remove();
  }

  static showAlert(message, className) {
   const existingAlert = document.querySelector('.alert');
   if (existingAlert) {
     existingAlert.remove();
   }
  
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.left = '50%';
    div.style.top = '20%';
    div.style.transform = 'translate(-50%, -50%)';
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.main-container');
    const form = document.querySelector('.body-box');
    container.insertBefore(div, form);

    // Vanish in 2 seconds
    setTimeout(() => document.querySelector('.alert') && document.querySelector('.alert').remove(), 2000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
  }
}
//Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(id) {
    const books = Store.getBooks();
    
    const newBooks = books.filter(book => book.id !== id);

    localStorage.setItem('books', JSON.stringify(newBooks));

  }
}

// Submit Button Event Listener (displays bookCard) //
submitBtn.addEventListener('click', UI.displayBooks);

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
let id = 0;
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  id++;

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;

  //Validate
  if (title === '' || author === '' || pages === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {

    // Instantiate Book
    const book = new Book(id, title, author, pages);

    //Add book to UI
    UI.addBookToLibrary(book);

    //Add book to store
    Store.addBook(book);

    //Show success message
    UI.showAlert('Book Added', 'success');

    //Clear fields
    UI.clearFields();
  }
});

// Event: Remove a book
document.querySelector('#books-grid').addEventListener('click', (e) => {

  //look to see if the remove button was clicked
  if (e.target.closest('.remove') && e.target.closest('.remove').contains(e.target)) {

    // Remove book from store. This must come before the UI removal since it depends upon the elements being in the dom
    const bookId = parseInt(e.target.closest('.book-container').querySelector('.id').innerHTML);
    Store.removeBook(bookId);
    
    // Remove book from UI
    UI.deleteBook(e.target.closest('.book-container'));
    //Show success message
    UI.showAlert('Book Removed', 'success');
  }


});
