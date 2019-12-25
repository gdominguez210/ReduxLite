class Store {
  constructor(rootReducer) {
    this.state = {};
    this.rootReducer = rootReducer;
    this.getStore = this.getStore.bind(this);
  }

  getStore() {
    return Object.assign({}, this.state);
  }
}

const createStore = (...args) => new Store(...args);
