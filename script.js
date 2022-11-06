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

// Book Class : Represents a Book //
class Book {
  constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages + ' pages';
      this.read = read;
  }
  }
  
  //creates book from Book Constructor, adds to library
  class UI {
    static displayBooks(){
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
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      `;

      removeBtn.innerHTML = `
      <p>Remove<p>`;

      bookCard.appendChild(buttonGroup);
      buttonGroup.appendChild(removeBtn);
      booksGrid.appendChild(bookCard);
    }
  
    static deleteBook(el){
      if(el.classList.contains('remove')) {
        el.parentElement.parentElement.remove();
      }
    }

    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.main-container');
      const form = document.querySelector('.body-box');
      container.insertBefore(div, form);
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
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
      if(localStorage.getItem('books') === null) {
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
    static removeBook(pages) {
      const books = Store.getBooks();
      books.forEach((book, index) => {
        if(book.pages == pages) {
          books.splice(index, 1);
        }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }
  }  



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
  
  
  // Submit Button Event Listener (displays bookCard) //
  submitBtn.addEventListener('click', UI.displayBooks);

  // Event: Add a Book
  document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  
  //Validate
    if(title === '' || author === '' || pages === '') {
      UI.showAlert('Please fill in all fields','danger');
    } else {
    // Instantiate Book
    const book = new Book(title,author,pages);

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
    UI.deleteBook(e.target)

     //Show success message
     UI.showAlert('Book Removed', 'success');
  });