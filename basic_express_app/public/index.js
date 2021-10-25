fetch('/users')
  .then((res) => res.json())
  .then((res) => (document.querySelector('h1').innerHTML = res.data));
