import { Page } from "./counter/view.js";

class App {
  static start() {
    document.body.append(Page.i());
  }
}

App.start();
