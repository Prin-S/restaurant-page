import Restaurant1 from './restaurant1.jpg';
import Restaurant2 from './restaurant2.jpg';

const about = function() {
    const content = document.querySelector('#content');

    const aboutDiv = document.createElement('div');
    content.appendChild(aboutDiv);

    const heading = document.createElement('h1');
    heading.innerHTML = 'About Lorem Ipsum Restaurant';
    aboutDiv.appendChild(heading);

    (function locationContact() {
        const locationContactHeading = document.createElement('h3');
        locationContactHeading.innerHTML = 'Location & Contact';
        aboutDiv.appendChild(locationContactHeading);

        const locationContactPara = document.createElement('p');
        locationContactPara.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Maecenas volutpat blandit aliquam
            etiam. Sed augue lacus viverra vitae congue eu consequat ac. Curabitur gravida
            arcu ac tortor dignissim convallis.`;
        aboutDiv.appendChild(locationContactPara);

        const list = document.createElement('ul');
        aboutDiv.appendChild(list);

        const listItem1 = document.createElement('li');
        listItem1.innerHTML = 'Address: 859 Fremont St., San Jose, CA 95127';
        list.appendChild(listItem1);

        const listItem2 = document.createElement('li');
        listItem2.innerHTML = 'Phone: (408) 267-2852';
        list.appendChild(listItem2);

        const listItem3 = document.createElement('li');
        listItem3.innerHTML = 'Email: contact@loremipsumrestaurant.com';
        list.appendChild(listItem3);

        const restaurant1 = new Image();
        restaurant1.src = Restaurant1;
        restaurant1.setAttribute('class', 'image');
        aboutDiv.appendChild(restaurant1);
    })();

    (function historyHeading() {
        const historyHeading = document.createElement('h3');
        historyHeading.innerHTML = 'History';
        aboutDiv.appendChild(historyHeading);

        const historyPara = document.createElement('p');
        historyPara.innerHTML = `Mattis enim ut tellus elementum sagittis vitae et leo. Sit amet consectetur
            adipiscing elit pellentesque habitant morbi. Morbi tristique senectus et netus
            et malesuada fames ac. Porttitor massa id neque aliquam vestibulum morbi
            blandit. Suspendisse in est ante in nibh mauris cursus mattis molestie.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Et ligula
            ullamcorper malesuada proin libero nunc consequat interdum varius. Arcu dui
            vivamus arcu felis bibendum ut. Et tortor at risus viverra. Sit amet mattis
            vulputate enim nulla aliquet porttitor lacus luctus.`;
        aboutDiv.appendChild(historyPara);

        const restaurant2 = new Image();
        restaurant2.src = Restaurant2;
        restaurant2.setAttribute('class', 'image');
        aboutDiv.appendChild(restaurant2);
    })();
}

export {about};