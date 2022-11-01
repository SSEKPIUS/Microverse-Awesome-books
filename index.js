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
const books = [];
function loadBooks() {
  if (Object.keys(books).length > 0) {
    const el = document.querySelector('.book-list ul');
    books.forEach((element) => {
      const span1 = document.createElement('span');
      span1.textContent = `${element.book} by ${element.author}`;
      const input = document.createElement('div');
      input.type = 'button';
      input.value = 'Input';
      const span2 = document.createElement('span');
      span2.appendChild(input);
      const li = document.createElement('li');
      li.appendChild(span1);
      li.appendChild(span2);
      el.appendChild(li);
    });
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
  loadBooks();
});