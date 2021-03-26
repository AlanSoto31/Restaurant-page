import styles from "./styles.css";
import navbar from "./navbar";
import showHome from "./home";
import showMenu from "./menu";
import showContact from "./contact";

document.querySelector('.home-tab').addEventListener('click', showHome);

document.querySelector('.menu-tab').addEventListener('click', showMenu);

document.querySelector('.contact-tab').addEventListener('click', showContact);