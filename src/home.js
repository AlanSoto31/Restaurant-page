import showNav from "./navbar";

let showHome = () => {
  const home = document.getElementById('content');
  home.innerHTML = `
  <div class="welcome-con">
    <div class="title-con">
      <h1 class="title">Esta <span></span> Carbon</h1>
      <p class="sub-title">QUE SE ARME LA CARNITA ASADA</p>
    </div>
    <p class="welcome-text">Tradicion desde 1950</p>
  </div>
  `;
};

showHome();

export default showHome;