import styles from "./styles.css";
import printSomething from "./test";

const helloBtn = document.querySelector('.hello');

helloBtn.addEventListener('click', printSomething);