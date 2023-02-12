import { Elements } from "../../element/index.js";
import { PageData } from "../../data/index.js";
import {
  PageText,
  PageInput,
  PageAddButton,
  PageResetButton,
} from "./component.js";

export class Page {
  static i() {
    PageData.state.setDependents(PageText, PageInput);

    return Elements.div`
      ${PageText.i()}
      ${PageInput.i()}
      ${PageAddButton.i()}
      ${PageResetButton.i()}
    `;
  }
}
