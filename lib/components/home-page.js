// var localDB = new PouchDB('mylocaldb');

import "../styles/columns.scss";
import "../styles/home-page.scss";
import "../styles/utilities.scss";

import {InteractiveBg} from '../interactive-bg.js';

InteractiveBg("hero-interactive");

// Navbar Event Listener
const activeClass = 'is-active';
const toggler = document.getElementsByClassName('nav-toggle');
const menu = document.getElementsByClassName('nav-menu');

toggler[0].addEventListener('click', function(event) {
    menu[0].classList.toggle(activeClass);
});
