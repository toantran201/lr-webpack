import {upperFirst} from "lodash";
import HelloButton from "../components/hello-button/hello-button";
import Heading from "../components/heading/heading";

class HelloWorldPage {
  render () {
    const helloButton = new HelloButton();
    helloButton.render();
    helloButton.render();

    const heading = new Heading();
    heading.render(upperFirst('hello world'));
  }
}
export default HelloWorldPage;