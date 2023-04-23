import {addImage, addSvg} from './add-image.js';
import HelloButton from "./components/hello-button/hello-button";

addImage();
addSvg();
const helloButton = new HelloButton();
helloButton.render();