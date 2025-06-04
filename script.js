const myLibrary= [];

function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.id=crypto.randomUUID();
}
function addBookToLibrary(title,author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    // console.log(myLibrary);
}
// addBookToLibrary("book1","author1",223,true)
// addBookToLibrary("book2","author2",543,true)
// addBookToLibrary("book3","author3",123,true)
// addBookToLibrary("book4","author4",234,true)
// addBookToLibrary("book5","author5",432,true)

const booksContainer= document.getElementById('booksContainer')

function displayBooks(){
    booksContainer.innerHTML='';
    myLibrary.forEach(book =>{
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.bookId=book.id;
        const title= document.createElement('h2');
        title.textContent=book.title;
        const author = document.createElement('p');
        author.textContent=`Author: ${book.author}`;

        const pages = document.createElement('p')
        pages.textContent=`Pages: ${book.pages}`;

        const readStatus = document.createElement('p');
        readStatus.textContent=`Read: ${book.read ? 'Yes' : 'No'}`;
        

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);

        booksContainer.appendChild(bookCard)
    });
}

const newBookBtn= document.getElementById('newBookBtn');
const bookFormDialog = document.getElementById('bookFormDialog');
const bookForm = document.getElementById('bookForm');

newBookBtn.addEventListener('click',()=>{
    bookFormDialog.showModal();
});
bookForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    const title=document.getElementById('title').value;
    const author=document.getElementById('autor').value;
    const pages=document.getElementById('pages').value;
    const read=document.getElementById('read').checked;

    if(!title || !author || !pages){
        alert('Please fill all the fields(title, Author, Pages)')
        return;
    }
    addBookToLibrary(title, author, parseInt(pages), read)
    displayBooks();

    bookForm.requestFullscreen();
    bookFormDialog.close();
});

