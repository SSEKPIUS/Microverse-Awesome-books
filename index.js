/* eslint-disable radix */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
function toggleView(index) {
  switch (index) {
    case 0:
      document.getElementById('list').style.display = 'flex';
      document.getElementById('new').style.display = 'none';
      document.getElementById('contact').style.display = 'none';
      break;
    case 1:
      document.getElementById('list').style.display = 'none';
      document.getElementById('new').style.display = 'flex';
      document.getElementById('contact').style.display = 'none';
      break;
    case 2:
      document.getElementById('list').style.display = 'none';
      document.getElementById('new').style.display = 'none';
      document.getElementById('contact').style.display = 'flex';
      break;
    default:
      document.getElementById('list').style.display = 'flex';
      document.getElementById('new').style.display = 'none';
      document.getElementById('contact').style.display = 'none';
  }
}
let books = [];
function removeBook(tag) {
  if (Object.keys(books).length > 0) {
    books = books.filter(function (el) {
      return el.id !== parseInt(this[0]);
    }, tag);
    localStorage.setItem('books', JSON.stringify(books));
    window.dispatchEvent(new Event('storage'));
  }
}
function loadBooks() {
  const el = document.querySelector('.book-list ul');
  el.innerHTML = '';
  if (localStorage.getItem('books')) {
    const data = JSON.parse(localStorage.getItem('books'));
    if (Object.keys(data).length > 0) {
      data.forEach((element) => {
        const span0 = document.createElement('span');
        span0.innerText = element.id;
        const span1 = document.createElement('span');
        span1.textContent = `${element.book} by ${element.author}`;
        const input = document.createElement('input');
        input.type = 'button';
        input.value = 'Remove';
        input.addEventListener('click', (e) => {
          const bookTag = e.target.parentNode.parentNode.querySelector('span:first-child').innerText;
          removeBook(bookTag);
        });
        const span2 = document.createElement('span');
        span2.appendChild(input);
        const li = document.createElement('li');
        li.appendChild(span0);
        li.appendChild(span1);
        li.appendChild(span2);
        el.appendChild(li);
      });
    }
    books = data;
  }
}
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('list-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#new-link span').style.color = 'inherit';
    document.querySelector('#contact-link span').style.color = 'inherit';
    toggleView(0);
  });
  document.getElementById('new-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#list-link span').style.color = 'inherit';
    document.querySelector('#contact-link span').style.color = 'inherit';
    toggleView(1);
  });
  document.getElementById('contact-link').addEventListener('click', (e) => {
    e.target.style.color = 'blue';
    document.querySelector('#list-link span').style.setProperty('color', 'inherit');
    document.querySelector('#new-link span').style.setProperty('color', 'inherit');
    toggleView(2);
  });
  document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = books.length;
    const book = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (book && author) {
      books.push({ id, book, author });
      document.getElementById('error').textContent = '';
      localStorage.setItem('books', JSON.stringify(books));
      window.dispatchEvent(new Event('storage'));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    } else {
      document.getElementById('error').textContent = 'Provide all details';
      document.getElementById('error').style.setProperty('color', 'red');
    }
  });
  window.addEventListener('storage', () => {
    loadBooks();
  });
  loadBooks();
});
