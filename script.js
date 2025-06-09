const myLibrary = [];

function Book(title, author, pages, read, cover) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.cover = cover || 'https://via.placeholder.com/200x280?text=No+Cover';
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read, cover) {
  const newBook = new Book(title, author, pages, read, cover);
  myLibrary.push(newBook);
  displayBooks();
}

function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

function toggleReadStatus(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.read = !book.read;
    displayBooks();
  }
}

function displayBooks() {
  booksContainer.innerHTML = '';
  myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.bookId = book.id;

    const coverImg = document.createElement('img');
    coverImg.src = book.cover;

    const title = document.createElement('h2');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const readStatus = document.createElement('p');
    readStatus.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('card-buttons');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑 Delete';
    deleteBtn.onclick = () => removeBook(book.id);

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Read';
    toggleBtn.onclick = () => toggleReadStatus(book.id);

    buttonContainer.appendChild(toggleBtn);
    buttonContainer.appendChild(deleteBtn);

    bookCard.appendChild(coverImg);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(buttonContainer);

    booksContainer.appendChild(bookCard);
  });
}


const newBookBtn = document.getElementById('newBookBtn');
const bookFormDialog = document.getElementById('bookFormDialog');
const bookForm = document.getElementById('bookForm');
const booksContainer = document.getElementById('booksContainer');
const darkToggle = document.getElementById('toggleDarkMode');

newBookBtn.addEventListener('click', () => {
  bookFormDialog.showModal();
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const pages = parseInt(document.getElementById('pages').value);
  const read = document.getElementById('read').checked;
  const cover = document.getElementById('cover').value.trim();

  if (!title || !author || !pages) {
    alert('Please fill in all required fields.');
    return;
  }

  addBookToLibrary(title, author, pages, read, cover);
  bookForm.reset();
  bookFormDialog.close();
});

document.getElementById('cancelFormBtn').addEventListener('click', () => {
  bookFormDialog.close();
});

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
addBookToLibrary(
  "1984",
  "George Orwell",
  328,
  true,
  "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg"
);
addBookToLibrary(
  "To Kill a Mockingbird",
  "Harper Lee",
  281,
  false,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQm8rW00NBdArSeDjdpDs-R4JbQaNhuki-w&s"
);
addBookToLibrary(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  180,
  true,
  "https://m.media-amazon.com/images/I/51vv75oglyL.jpg"
);
addBookToLibrary(
  "Pride and Prejudice",
  "Jane Austen",
  279,
  false,
  "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg"
);
addBookToLibrary(
  "The Hobbit",
  "J.R.R. Tolkien",
  310,
  true,
  "https://m.media-amazon.com/images/I/41aQPTCmeVL.jpg"
);
