import { observable, action, computed, decorate } from "mobx";

class Store {
  count = 0;

  increment = () => {
    this.count++;
  };

  get doubleCount() {
    return this.count * 2;
  }
}

decorate(Store, {
  count: observable,
  increment: action,
  doubleCount: computed,
});

export const store = new Store();
