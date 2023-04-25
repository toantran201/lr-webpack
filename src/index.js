import {addImage, addSvg} from './add-image.js';
import HelloButton from "./components/hello-button/hello-button";
import Heading from "./components/heading/heading";

addImage();
addSvg();
const helloButton = new HelloButton();
helloButton.render();

const heading = new Heading();
heading.render();