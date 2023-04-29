import HouseImage from "./components/house-image/tv-image";
import Heading from "./components/heading/heading";
import {upperFirst} from "lodash";

const heading = new Heading();
heading.render();

const houseImage = new HouseImage();
houseImage.render(upperFirst('house'));