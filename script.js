// Book Class : Represents a Book //
class book {
  constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages + 'pages';
      this.read = read;
  }
  }
  
  //creates book from Book Constructor, adds to library
  class UI {
    static displayBooks(){
      const StoredBooks = [
        {
          title: 'Book One',
          author: 'John Doe',
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
      bookCard.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      `

      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(pages);
    }
  }
  
 
  

  // User interface //
  const bookCard = document.querySelector('#library-container');
  const popUpForm = document.querySelector('.form-popup');
  const button = document.getElementById('addBook');
  const overlay = document.getElementById('overlay');
  const booksGrid = document.getElementById('booksGrid');
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
  
  submitBtn.addEventListener("click", UI.displayBooks); 