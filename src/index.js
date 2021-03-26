import styles from "./styles.css";
import home from "./home.js";
import showHome from "./home";
import showMenu from "./menu";
import showContact from "./contact";

const homeTab = document.querySelector('.home-tab')
homeTab.addEventListener('click', showHome);

const menuTab = document.querySelector('.menu-tab')
menuTab.addEventListener('click', showMenu);

const contactTab = document.querySelector('.contact-tab')
contactTab.addEventListener('click', showContact);