import Ribs from './ribs.jpg';
import Kebab from './kebab.jpg';
import Cheesecake from './cheesecake.jpg';
import Chocolate from './chocolate.jpg';

const home = function() {
    const content = document.querySelector('#content');

    const homeDiv = document.createElement('div');
    content.appendChild(homeDiv);

    const heading = document.createElement('h1');
    heading.innerHTML = 'Welcome to Lorem Ipsum Restaurant!';
    homeDiv.appendChild(heading);

    (function homeMains() {
        const mainsHeading = document.createElement('h3');
        mainsHeading.innerHTML = 'Mains';
        homeDiv.appendChild(mainsHeading);

        const mainsPara1 = document.createElement('p');
        mainsPara1.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.`;
        homeDiv.appendChild(mainsPara1);

        const ribs = new Image();
        ribs.src = Ribs;
        ribs.setAttribute('class', 'image');
        homeDiv.appendChild(ribs);

        const mainsPara2 = document.createElement('p');
        mainsPara2.innerHTML = `Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Nisl suscipit
            adipiscing bibendum est ultricies integer quis. Nullam eget felis eget nunc
            lobortis mattis aliquam faucibus purus. Tristique senectus et netus et malesuada
            fames. Malesuada fames ac turpis egestas integer eget. Mi tempus imperdiet nulla
            malesuada. Nec dui nunc mattis enim ut tellus. Euismod elementum nisi quis
            eleifend quam adipiscing vitae proin sagittis. Vestibulum lorem sed risus
            ultricies tristique. Amet mauris commodo quis imperdiet massa tincidunt nunc
            pulvinar. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Et
            pharetra pharetra massa massa ultricies mi quis.`;
        homeDiv.appendChild(mainsPara2);

        const kebab = new Image();
        kebab.src = Kebab;
        kebab.setAttribute('class', 'image');
        homeDiv.appendChild(kebab);
    })();

    (function homeDesserts() {
        const dessertsHeading = document.createElement('h3');
        dessertsHeading.innerHTML = 'Desserts';
        homeDiv.appendChild(dessertsHeading);

        const dessertsPara = document.createElement('p');
        dessertsPara.innerHTML = `Vulputate dignissim suspendisse in est. At risus viverra adipiscing at in tellus
            integer feugiat. Blandit massa enim nec dui nunc mattis enim ut. Nisl nunc mi
            ipsum faucibus vitae. Nec dui nunc mattis enim ut tellus elementum sagittis
            vitae. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod.
            Tincidunt ornare massa eget egestas purus. Mi in nulla posuere sollicitudin
            aliquam ultrices sagittis orci. Quisque sagittis purus sit amet volutpat
            consequat mauris nunc. Augue ut lectus arcu bibendum at varius vel pharetra.
            Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Eu
            lobortis elementum nibh tellus molestie nunc non blandit. Aliquet nibh praesent
            tristique magna sit amet purus gravida quis. Lorem ipsum dolor sit amet
            consectetur adipiscing elit ut.`;
        homeDiv.appendChild(dessertsPara);

        const dessertGrid = document.createElement('div');
        dessertGrid.setAttribute('class', 'grid');
        homeDiv.appendChild(dessertGrid);

        const cheesecake = new Image();
        cheesecake.src = Cheesecake;
        cheesecake.setAttribute('class', 'image-align-right image-grid-mobile');
        dessertGrid.appendChild(cheesecake);

        const chocolate = new Image();
        chocolate.src = Chocolate;
        chocolate.setAttribute('class', 'image-align-left image-grid-mobile');
        dessertGrid.appendChild(chocolate);
    })();
}

export {home};