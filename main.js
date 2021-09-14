const title = document.getElementById('bookTitle');
const author = document.getElementById('bookAuthor');
const addBook = document.getElementById('addBtn');
const list = document.getElementById('bookList');
const books = JSON.parse(localStorage.getItem('booklist') || '[]');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const addBookToList = () => {
  const newTitle = title.value;
  const newAuthor = author.value;
  if (newTitle && newAuthor) {
    const newBook = new Book(newTitle, newAuthor);
    books.push(newBook);
    localStorage.setItem('booklist', JSON.stringify(books));
    window.location.reload();
  } else {
    alert('Both input fields are required!');
    window.location.reload();
  }
};

const showBookOnList = () => {
  books.forEach((book) => {
    const currentBook = document.createElement('div');
    const currentTitle = document.createElement('p');
    const currentAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    currentTitle.innerHTML = `${book.title}`;
    currentAuthor.innerHTML = `${book.author}`;
    currentBook.append(currentTitle);
    currentBook.append(currentAuthor);
    removeBtn.innerHTML = 'Remove';
    currentBook.append(removeBtn);
    list.append(currentBook);
  });
};

addBook.addEventListener('click', addBookToList);
showBookOnList();
