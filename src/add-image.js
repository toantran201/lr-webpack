import House from './house.jpg';
import Apple from './apple.svg';
import altText from './altText.txt'

export function addImage () {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = House;
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.appendChild(img);
    body.appendChild(div);
}

export function addSvg () {
    const img = document.createElement('img');
    img.alt = 'Apple';
    img.width = 20;
    img.src = Apple;
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.appendChild(img);
    body.appendChild(div);
}

