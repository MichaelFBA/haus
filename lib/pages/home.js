// Import Scss
import "../styles/columns.scss";
import "../styles/nav.scss";
import "../styles/buttons.scss";
import "../styles/helpers.scss";
import "../styles/home-page.scss";
import "../styles/utilities.scss";

// Import Libs
import {InteractiveBg} from '../interactive-bg.js';

InteractiveBg("hero-interactive");

// Navbar Event Listener
const activeClass = 'is-active';
const toggler = document.getElementsByClassName('nav-toggle');
const menu = document.getElementsByClassName('nav-menu');

toggler[0].addEventListener('click', function(event) {
    menu[0].classList.toggle(activeClass);
});
