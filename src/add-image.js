import House from './house.jpg';
import Apple from './apple.svg';
import altText from './altText.txt'

export function addImage () {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = House;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export function addSvg () {
    const img = document.createElement('img');
    img.alt = 'Apple';
    img.width = 20;
    img.src = Apple;
    const body = document.querySelector('body');
    body.appendChild(img);
}

