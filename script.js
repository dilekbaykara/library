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
      const StoredBooks = [
        {
         
        }
      ];
      const books = StoredBooks;
      books.forEach((book) => UI.addBookToLibrary(book));
      bookCard.style.display = "block";
      popUpForm.style.display = "none";
      overlay.style.display = "none";
    }
    
    static addBookToLibrary(book) {
      const bookCard = document.querySelector('#library-container');
      const column = document.createElement('p');

      column.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      `;

      bookCard.appendChild(column);
    }
  
    static deleteBook(el){
      if(el.classList.contains('remove')) {
        el.parentElement.parentElement.remove();
      }
    }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
  }
      
    
}
  
 
  

  // User interface //
  const bookCard = document.querySelector('#library-container');
  const popUpForm = document.querySelector('.form-popup');
  const button = document.getElementById('addBook');
  const overlay = document.getElementById('overlay');
  const booksGrid = document.getElementById('books-grid');
  const form = document.querySelector('.form-container');
  const submitBtn = document.getElementById('submit');
  
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
      alert('Please fill in all fields');
    } else {
      
    // Instantiate Book
    const book = new Book(title,author,pages);

    //Add book to UI
    UI.addBookToLibrary(book);

    //Clear fields
    UI.clearFields();
    }
  });

    
    

  // Event: Remove a book
  document.querySelector('#books-grid').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
  });