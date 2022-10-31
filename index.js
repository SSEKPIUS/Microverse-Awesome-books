/* eslint-disable no-loop-func */
function includeHTML() {
  let i; let elmnt; let file; let xhttp;
  const z = document.getElementsByTagName('*');
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute('include-html');
    if (file) {
      xhttp = new XMLHttpRequest();
      // eslint-disable-next-line func-names
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) { elmnt.innerHTML = this.responseText; }
          if (this.status === 404) { elmnt.innerHTML = 'Page not found.'; }
          elmnt.removeAttribute('include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      return;
    }
  }
}
window.addEventListener('DOMContentLoaded', () => {
  includeHTML();
});