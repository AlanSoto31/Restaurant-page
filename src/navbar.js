  const content = document.querySelector("body");
  const nav = document.createElement('nav');
  nav.innerHTML = `
  <a href="#" class="navbar-links home-tab">Home</a>
  <a href="#" class="navbar-links menu-tab">Menu</a>
  <a href="#" class="navbar-links contact-tab">Contact</a>
  `;
  content.appendChild(nav);