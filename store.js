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

const combineReducers = reducerContainer => {
  return (prevState, action) => {
    const newState = {};
    const reducers = Object.keys(reducerContainer);
    for (let i = 0; i < reducers.length; i++) {
      let reducer = reducers[i];
      newState[reducer] = reducerContainer[reducer](prevState, action);
    }

    return newState;
  };
};
