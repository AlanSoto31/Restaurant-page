  const content = document.querySelector("body");
  const nav = document.createElement('nav');
  nav.innerHTML = `
  <a href="#" class="tabs" id="home">Home</a>
  <a href="#" class="tabs" id="menu">Menu</a>
  <a href="#" class="tabs" id="contact">Contact</a>
  `;
  content.appendChild(nav);