const menu = function() {
    const content = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    content.appendChild(menuDiv);

    const heading = document.createElement('h1');
    heading.innerHTML = 'Our Menu';
    menuDiv.appendChild(heading);

    (function starters() {
        const startersHeading = document.createElement('h3');
        startersHeading.innerHTML = 'Starters';
        menuDiv.appendChild(startersHeading);

        const startersPara = document.createElement('p');
        startersPara.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam
            erat. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Odio
            aenean sed adipiscing diam donec adipiscing.`;
        menuDiv.appendChild(startersPara);

        const startersGrid = document.createElement('div');
        startersGrid.setAttribute('class', 'menu-grid');
        menuDiv.appendChild(startersGrid);

        const startersItem = document.createElement('div');
        startersItem.innerHTML = 'Lorem ipsum dolor sit amet<br/>Consectetur adipiscing elit<br/>Sed do eiusmod tempor';
        startersGrid.appendChild(startersItem);

        const startersPrice = document.createElement('div');
        startersPrice.setAttribute('class', 'text-right');
        startersPrice.innerHTML = '$3.00<br/>$7.00<br/>$5.00'
        startersGrid.appendChild(startersPrice);
    })();
    
    (function mains() {
        const mainsHeading = document.createElement('h3');
        mainsHeading.innerHTML = 'Main Course';
        menuDiv.appendChild(mainsHeading);

        const mainPara = document.createElement('p');
        mainPara.innerHTML = `Cras fermentum odio eu feugiat pretium nibh. Fermentum et sollicitudin ac orci
            phasellus egestas tellus. Sed elementum tempus egestas sed sed risus pretium.
            Euismod in pellentesque massa placerat duis. Consectetur libero id faucibus
            nisl.`;
        menuDiv.appendChild(mainPara);

        const mainsGrid = document.createElement('div');
        mainsGrid.setAttribute('class', 'menu-grid');
        menuDiv.appendChild(mainsGrid);

        const mainsItem = document.createElement('div');
        mainsItem.innerHTML = 'Urna nec tincidunt praesent semper<br/>In fermentum et sollicitudin ac orci<br/>Vitae proin sagittis nisl<br/>Cras sed felis eget velit<br/>Aliquet sagittis id consectetur';
        mainsGrid.appendChild(mainsItem);

        const mainsPrice = document.createElement('div');
        mainsPrice.setAttribute('class', 'text-right');
        mainsPrice.innerHTML = '$13.00<br/>$25.00<br/>$18.00<br/>$39.00<br/>$31.00'
        mainsGrid.appendChild(mainsPrice);
    })();

    (function desserts() {
        const dessertsHeading = document.createElement('h3');
        dessertsHeading.innerHTML = 'Desserts';
        menuDiv.appendChild(dessertsHeading);

        const dessertsPara = document.createElement('p');
        dessertsPara.innerHTML = `Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Volutpat blandit
            aliquam etiam erat velit scelerisque. Vestibulum mattis ullamcorper velit sed
            ullamcorper morbi. Dui faucibus in ornare quam. Ut porttitor leo a diam.
            Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.`;
        menuDiv.appendChild(dessertsPara);

        const dessertsGrid = document.createElement('div');
        dessertsGrid.setAttribute('class', 'menu-grid');
        menuDiv.appendChild(dessertsGrid);

        const dessertsItem = document.createElement('div');
        dessertsItem.innerHTML = 'Etiam non quam lacus<br/>Suspendisse faucibus<br/>Adipiscing vitae proin';
        dessertsGrid.appendChild(dessertsItem);

        const dessertsPrice = document.createElement('div');
        dessertsPrice.setAttribute('class', 'text-right');
        dessertsPrice.innerHTML = '$8.00<br/>$4.00<br/>$11.00'
        dessertsGrid.appendChild(dessertsPrice);
    })();

    (function drinks() {
        const drinksHeading = document.createElement('h3');
        drinksHeading.innerHTML = 'Drinks';
        menuDiv.appendChild(drinksHeading);

        const drinksPara = document.createElement('p');
        drinksPara.innerHTML = `Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Nascetur
            ridiculus mus mauris vitae ultricies leo. Bibendum at varius vel pharetra vel
            turpis nunc eget lorem. Aliquet sagittis id consectetur purus ut faucibus.`;
        menuDiv.appendChild(drinksPara);

        const drinksGrid = document.createElement('div');
        drinksGrid.setAttribute('class', 'menu-grid');
        menuDiv.appendChild(drinksGrid);

        const drinksItem = document.createElement('div');
        drinksItem.innerHTML = 'Vulputate mi sit amet<br/>Mauris commodo quis<br/>Massa eget egestas<br/>Purus viverra accumsan in nisl';
        drinksGrid.appendChild(drinksItem);

        const drinksPrice = document.createElement('div');
        drinksPrice.setAttribute('class', 'text-right');
        drinksPrice.innerHTML = '$2.00<br/>$6.00<br/>$3.00<br/>$12.00'
        drinksGrid.appendChild(drinksPrice);
    })();
}

export {menu};