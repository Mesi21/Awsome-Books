const homePage = document.getElementById('bookList');
const addBookPage = document.getElementById('addBooks');
const contactPage = document.getElementById('contact-container');
const listLk = document.getElementById('listLink');
const addBkLk = document.getElementById('addBookLink');
const contactLk = document.getElementById('contactLink');
const pageTitle = document.getElementById('awsome');
const dateTime = document.getElementById('date-time');

addBookPage.style.display = 'none';
contactPage.style.display = 'none';
pageTitle.style.display = 'block';

listLk.addEventListener('click', () => {
  pageTitle.style.display = 'block';
  homePage.style.display = 'block';
  addBookPage.style.display = 'none';
  contactPage.style.display = 'none';
});

addBkLk.addEventListener('click', () => {
  addBookPage.style.display = 'block';
  pageTitle.style.display = 'none';
  homePage.style.display = 'none';
  contactPage.style.display = 'none';
});

contactLk.addEventListener('click', () => {
  addBookPage.style.display = 'none';
  contactPage.style.display = 'block';
  pageTitle.style.display = 'none';
  contactPage.style.marginTop = '80px';
  homePage.style.display = 'none';
});
