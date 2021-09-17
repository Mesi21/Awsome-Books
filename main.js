const addBook = document.getElementById('addBtn');
const list = document.getElementById('bookList');

class Book {
  constructor() {
    this.title = document.getElementById('bookTitle');
    this.author = document.getElementById('bookAuthor');
    this.books = JSON.parse(localStorage.getItem('booklist') || '[]');
  }

  showBookOnList = () => {
    list.innerHTML = '';
    this.books.forEach((book) => {
      const currentBook = document.createElement('div');
      const currentTitle = document.createElement('p');
      const currentAuthor = document.createElement('p');
      const removeBtn = document.createElement('button');
      const horizontalLine = document.createElement('hr');
      const bookId = Object.entries(this.books).length;
      currentTitle.innerHTML = `${book.title}`;
      currentAuthor.innerHTML = `${book.author}`;
      removeBtn.id = bookId;
      removeBtn.addEventListener('click', () => {
        this.books = this.books.filter((currBk) => currBk.id !== book.id);
        localStorage.setItem('booklist', JSON.stringify(this.books));
        this.showBookOnList();
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

  addBookToList() {
    if (this.title.value && this.author.value) {
      const newBook = {
        title: this.title.value,
        author: this.author.value,
        id: (Object.entries(this.books).length) + 1,
      };
      this.books.push(newBook);
      localStorage.setItem('booklist', JSON.stringify(this.books));
      this.showBookOnList();
      this.title.value = '';
      this.author.value = '';
    } else {
      alert('Both input fields are required!');
    }
  }
}

const newBook = new Book();

addBook.addEventListener('click', () => {
  newBook.addBookToList();
});