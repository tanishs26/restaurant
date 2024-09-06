import "./style.css";
import { pageload } from "./pageload";
import menu from "./menu";
import about from "./about";
const home = document.querySelector("#home");
const content = document.querySelector("#content");
const menus = document.querySelector("#menu");
const abouts = document.querySelector("#about");
pageload();
home.addEventListener("click", () => {
  content.textContent = "";
  pageload();
});
menus.addEventListener("click", () => {
  content.textContent = "";
  menu();
});
abouts.addEventListener("click", () => {
    content.textContent = "";
    about();
  });
