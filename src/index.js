import styles from "./styles.css";
import home from "./home.js";
import printSomething from "./test";

const helloBtn = document.querySelector('.hello');

helloBtn.addEventListener('click', printSomething);