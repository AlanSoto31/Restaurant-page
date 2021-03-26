import styles from "./styles.css";
import navbar from "./navbar";
import showHome from "./home";
import showMenu from "./menu";
import showContact from "./contact";

document.querySelector('#home').addEventListener('click', showHome);

document.querySelector('#menu').addEventListener('click', showMenu);

document.querySelector('#contact').addEventListener('click', showContact);
