const demoReducer = (prevState, action) => {
  switch (action.type) {
    case "change demo":
      return action.demo;
    default:
      return prevState;
  }
};

const testReducer = (prevState, action) => {
  switch (action.type) {
    case "update test":
      return action.test;
    default:
      return prevState;
  }
};
