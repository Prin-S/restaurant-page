import './styles.css';
import { home } from './home';
import { menu } from './menu';
import { about } from './about';

const content = document.querySelector('#content');

function changePage(page) {
    content.innerHTML = '';

    if (page == 'home') {
        home();
    } else if (page == 'menu') {
        menu();
    } else if (page == 'about') {
        about();
    }
}

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', changePage.bind(this, homeButton.id));

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', changePage.bind(this, menuButton.id));

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click', changePage.bind(this, aboutButton.id));

home();