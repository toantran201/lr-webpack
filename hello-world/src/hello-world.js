import HelloButton from "./components/hello-button/hello-button";
import Heading from "./components/heading/heading";
import {upperFirst} from "lodash";
const helloButton = new HelloButton();
helloButton.render();
helloButton.render();

const heading = new Heading();
heading.render(upperFirst('hello world'));
