// Import Scss
import "../styles/grid.scss";
import "../styles/home-page.scss";
import "../styles/utilities.scss";

// Import Libs
import {InteractiveHeader} from '../InteractiveHeader.js';

InteractiveHeader("hero-interactive");

// Navbar Event Listener
const activeClass = 'is-active';
const toggler = document.getElementsByClassName('nav-toggle');
const menu = document.getElementsByClassName('nav-menu');

toggler[0].addEventListener('click', function(event) {
    menu[0].classList.toggle(activeClass);
});
