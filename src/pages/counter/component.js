import { Elements } from "../../element/index.js";
import { PageData } from "../../data/index.js";

export class PageText {
  static element = Elements.div``;

  static i() {
    const self = PageText;
    self.element = Elements.div`
        number is ${PageData.state.num}
      `;

    return self.element;
  }

  static render() {
    PageText.element.replaceWith(PageText.i());
  }
}

export class PageInput {
  static element = Elements.input``;

  static i() {
    const self = PageInput;
    self.element = Elements.input``;
    self.element.value = PageData.state.num;
    self.element.addEventListener("change", self.onChange);

    return self.element;
  }

  static onChange() {
    const value = Number(PageInput.element.value);
    PageData.state.setNum(value);
  }

  static render() {
    PageInput.element.replaceWith(PageInput.i());
  }
}

export class PageAddButton {
  static element = Elements.button``;

  static i() {
    const self = PageAddButton;
    self.element = Elements.button`add`;
    self.element.addEventListener("click", self.onClick);

    return self.element;
  }

  static onClick() {
    PageData.state.setNum(PageData.state.num + 1);
  }
}

export class PageResetButton {
  static element = Elements.button``;

  static i() {
    const self = PageResetButton;
    self.element = Elements.button`reset`;
    self.element.addEventListener("click", self.onClick);

    return self.element;
  }

  static onClick() {
    PageData.state.reset();
  }
}
