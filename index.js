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
});