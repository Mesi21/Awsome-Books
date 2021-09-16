const title = document.getElementById('bookTitle');
const author = document.getElementById('bookAuthor');
const addBook = document.getElementById('addBtn');
const list = document.getElementById('bookList');
let books = JSON.parse(localStorage.getItem('booklist') || '[]');

const showBookOnList = () => {
  list.innerHTML = '';
  books.forEach((book) => {
    const currentBook = document.createElement('div');
    const currentTitle = document.createElement('p');
    const currentAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    const horizontalLine = document.createElement('hr');
    const bookId = Object.entries(books).length;
    currentTitle.innerHTML = `${book.title}`;
    currentAuthor.innerHTML = `${book.author}`;
    removeBtn.id = bookId;
    removeBtn.addEventListener('click', () => {
      books = books.filter((currBk) => currBk.id !== book.id);
      localStorage.setItem('booklist', JSON.stringify(books));
      showBookOnList();
    });
    currentBook.append(currentTitle);
    currentBook.append(currentAuthor);
    removeBtn.className = 'remove';
    removeBtn.innerHTML = 'Remove';
    currentBook.append(removeBtn);
    currentBook.append(horizontalLine);
    list.append(currentBook);
  });
};

const addBookToList = () => {
  const newTitle = title.value;
  const newAuthor = author.value;
  if (newTitle && newAuthor) {
    const newBook = { title: newTitle, author: newAuthor, id: (Object.entries(books).length) + 1 };
    books.push(newBook);
    localStorage.setItem('booklist', JSON.stringify(books));
    showBookOnList();
    title.value = '';
    author.value = '';
  } else {
    alert('Both input fields are required!');
  }
};

addBook.addEventListener('click', addBookToList);
showBookOnList();