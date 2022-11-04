// Library Functions //
class Book {
  constructor(title, author, pages, read) {
      this.title = form.title.value;
      this.author = form.author.value;
      this.pages = form.pages.value + 'pages';
      this.read = form.read.checked;
  }
  }
  
  //creates book from Book Constructor, adds to library
  let myLibrary = [];
  let newBook;
  
  function addBookToLibrary() {
      event.preventDefault();
      popUpForm.style.display = 'none';
      newBook = new Book(title, author, pages); 
      myLibrary.push(newBook); 
      render(); 
      form.reset();
  }
  
  //Creates book visual in browser
  function render() {
      const books = document.querySelectorAll('.book');
      books.forEach(book => display.removeChild(book));
     
      for (let i=0; i<myLibrary.length; i++){
          createBook(myLibrary[i]);
      }
  }
  
  //
  function createBook(item) {
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));
  
    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);
  
    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);
  
    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);
  
  bookCard.style.display = "block"; 
  
  };
  
  // User interface //
  const popUpForm = document.querySelector('.form-popup');
  const button = document.getElementById('addBook');
  const overlay = document.getElementById('overlay');
  const booksGrid = document.getElementById('booksGrid');
  const bookCard = document.querySelector('.library-container');
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
  
  const updateBooksGrid = () => {
    resetBooksGrid()
    for (let book of library.books) {
      createBook(book)
    }
  };
  
  
  // Card for grid function //
  
  submitBtn.addEventListener("click", (createBook) => { 
    bookCard.style.display = "block";
    popUpForm.style.display = "none";
    overlay.style.display = "none";
  });