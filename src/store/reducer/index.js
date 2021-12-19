const initialState = {
  age: 15
};

const reducer = (state = initialState, action) => {
  if (action.type === "UP") {
    return {
      ...state,
      age: state.age + 1,
      loading: false
    };
  } else if (action.type === "DOWN") {
    return {
      ...state,
      age: state.age - 1
    };
  } else if (action.type === "LOADING") {
    return {
      ...state,
      loading: true
    };
  }
  return {
    ...state
  };
};

export default reducer;
