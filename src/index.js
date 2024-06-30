import './styles.css';
import Ribs from './ribs.jpg';
import Kebab from './kebab.jpg';
import Cheesecake from './cheesecake.jpg';
import Chocolate from './chocolate.jpg';

const content = document.querySelector('#content');

const heading = document.createElement('h1');
heading.innerHTML = 'Welcome to Lorem Ipsum Restaurant!';
content.appendChild(heading);

const subHeading1 = document.createElement('h3');
subHeading1.innerHTML = 'Mains';
content.appendChild(subHeading1);

const para1 = document.createElement('p');
para1.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.`
content.appendChild(para1);

const ribs = new Image();
ribs.src = Ribs;
ribs.setAttribute('class', 'image');
content.appendChild(ribs);

const para2 = document.createElement('p');
para2.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam erat
    velit scelerisque in dictum. Risus quis varius quam quisque id diam vel
    quam. Et tortor at risus viverra adipiscing at in. Nulla porttitor massa
    id neque aliquam vestibulum morbi blandit cursus. A lacus vestibulum sed
    arcu non odio. Odio eu feugiat pretium nibh ipsum consequat nisl vel.
    Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit
    amet facilisis magna etiam tempor orci eu. Ipsum dolor sit amet
    consectetur adipiscing elit ut aliquam.`
content.appendChild(para2);

const kebab = new Image();
kebab.src = Kebab;
kebab.setAttribute('class', 'image');
content.appendChild(kebab);

const subHeading2 = document.createElement('h3');
subHeading2.innerHTML = 'Desserts';
content.appendChild(subHeading2);

const para3 = document.createElement('p');
para3.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
    lacus sed turpis tincidunt id aliquet risus. Egestas purus viverra
    accumsan in nisl. Risus nullam eget felis eget nunc lobortis mattis.
    Tellus cras adipiscing enim eu. Molestie at elementum eu facilisis sed
    odio morbi quis. Tortor at auctor urna nunc id cursus metus. Laoreet id
    donec ultrices tincidunt. Donec massa sapien faucibus et molestie.
    Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam.
    Placerat orci nulla pellentesque dignissim enim sit amet. Egestas
    fringilla phasellus faucibus scelerisque. Sed enim ut sem viverra
    aliquet eget sit amet. Odio tempor orci dapibus ultrices in iaculis nunc
    sed augue. Pretium aenean pharetra magna ac placerat vestibulum lectus.
    Consectetur adipiscing elit ut aliquam.`
content.appendChild(para3);

const cheesecake = new Image();
cheesecake.src = Cheesecake;
cheesecake.setAttribute('class', 'image');
content.appendChild(cheesecake);

const chocolate = new Image();
chocolate.src = Chocolate;
chocolate.setAttribute('class', 'image');
content.appendChild(chocolate);

console.log('hi');