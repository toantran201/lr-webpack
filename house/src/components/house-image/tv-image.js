import House from './house.jpg';
import './house.scss';

class HouseImage {
  render() {
    const body = document.querySelector('body');
    const el = document.createElement('img');
    el.src = House;
    el.alt = 'House';
    el.classList.add('house-image');

    body.appendChild(el);
  }
}

export default HouseImage;