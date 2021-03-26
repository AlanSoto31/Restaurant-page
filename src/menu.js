import showNav from "./navbar";

const showMenu = () => {
  const menu = document.getElementById('content');
  menu.innerHTML = `
  <section class="menu-con">
      <div class="title-menu-con">
        <h1 class="title">Esta <span></span> Carbon</h1>
        <div class="sub-title-menu-con">
          <div class="roll-img d-none"></div>
          <h5 class="sub-title-menu">Menu</h5>
          <div class="roll-img d-none"></div>
        </div>
      </div>
    </section>

    <div class="cards-grid">

      <div class="card1">
        <div class="card-imgs card-img1"></div>
        <div class="card-details-con">
          <h3 class="card-title">Ribeye entero</h3>
          <p class="card-text">$ 2500.00</p>
          <button class="card-btn">Ordenar</button>
        </div>
      </div>

      <div class="card1">
        <div class="card-imgs card-img2"></div>
        <div class="card-details-con">
          <h3 class="card-title">Orden de Salchichas</h3>
          <p class="card-text">$ 150.00</p>
          <button class="card-btn">Ordenar</button>
        </div>
      </div>

      <div class="card1">
        <div class="card-imgs card-img3"></div>
        <div class="card-details-con">
          <h3 class="card-title">Short ribeye</h3>
          <p class="card-text">$ 300.00</p>
          <button class="card-btn">Ordenar</button>
        </div>
      </div>

      <div class="card1">
        <div class="card-imgs card-img4"></div>
        <div class="card-details-con">
          <h3 class="card-title">Orden de alitas</h3>
          <p class="card-text">$ 200.00</p>
          <button class="card-btn">Ordenar</button>
        </div>
      </div>

      <div class="card1">
        <div class="card-imgs card-img5"></div>
        <div class="card-details-con">
          <h3 class="card-title">Costillas de cordero</h3>
          <p class="card-text">$ 300.00</p>
          <button class="card-btn">Ordenar</button>
        </div>
      </div>

      <div class="card1">
        <div class="card-imgs card-img6"></div>
        <div class="card-details-con">
          <h3 class="card-title">Brochetas de sirloin</h3>
          <p class="card-text">$ 300.00</p>
          <button class="card-btn">Ordenar</button>
        </div>
      </div>
    </div>
    `;
  }

export default showMenu;