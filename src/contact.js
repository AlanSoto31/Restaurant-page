import showNav from "./navbar";

const showContact = () => {
  const contact = document.getElementById('content');
  contact.innerHTML = `
  <div class="welcome-con">
    <div class="title-con">
      <h1 class="title">Llamanos</h1>
      <p class="sub-title">QUE SE ARME LA CARNITA ASADA</p>
    </div>
    <p class="welcome-text">Tradicion desde 1950</p>
  </div>
  `;
}

export default showContact;