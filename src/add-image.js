import House from './house.jpg';

export function addImage () {
    const img = document.createElement('img');
    img.alt = 'House';
    img.width = 300;
    img.src = House;
    const body = document.querySelector('body');
    body.appendChild(img);
}

