export class Elements {
  static append(text, vars, element) {
    for (const [i, t] of text.entries()) {
      element.append(t);
      element.append(vars[i] ?? "");
    }
  }

  static div(text, ...vars) {
    const element = document.createElement("div");

    Elements.append(text, vars, element);

    return element;
  }

  static button(text, ...vars) {
    const element = document.createElement("button");

    Elements.append(text, vars, element);

    return element;
  }

  static input(text, ...vars) {
    const element = document.createElement("input");

    Elements.append(text, vars, element);

    return element;
  }
}
