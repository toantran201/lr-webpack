import Heading from "../components/heading/heading";
import HouseImage from "../components/house-image/tv-image";
import {upperFirst} from "lodash";

class HousePage {
  render() {
    const heading = new Heading();
    heading.render();

    const houseImage = new HouseImage();
    houseImage.render(upperFirst('house'));

  }
}

export default HousePage;