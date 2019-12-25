const demoReducer = (oldDemo = null, action) => {
  switch (action.type) {
    case "change demo":
      return action.newDemo;
    default:
      return oldDemo;
  }
};
