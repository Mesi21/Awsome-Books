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
    let idx = 1;
    this.books.forEach((book) => {
      const currentBook = document.createElement('div');
      const currentInfo = document.createElement('p');
      const removeBtn = document.createElement('button');
      const bookId = Object.entries(this.books).length;
      currentInfo.innerHTML = `"${book.title}" by ${book.author}`;
      removeBtn.id = bookId;
      removeBtn.addEventListener('click', () => {
        this.books = this.books.filter((currBk) => currBk.id !== book.id);
        localStorage.setItem('booklist', JSON.stringify(this.books));
        this.showBookOnList();
      });
      currentBook.append(currentInfo);
      removeBtn.className = 'remove';
      removeBtn.innerHTML = 'Remove';
      currentBook.append(removeBtn);
      if (idx % 2 === 0) {
        currentBook.classList.add('row-even');
      } else {
        currentBook.classList.add('row-odd');
      }
      idx += 1;
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
