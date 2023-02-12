import { Page } from "./pages/counter/view.js";

class App {
  static start() {
    document.body.append(Page.i());
  }
}

App.start();
