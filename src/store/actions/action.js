export const ageUpAscnc = (val) => {
  return {
    type: "UP",
    value: val
  };
};
export const ageUp = (val) => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAscnc(val));
    }, 1000);
  };
};
export const ageDown = (val) => {
  return {
    type: "DOWN",
    value: val
  };
};

export const loading = () => {
  return {
    type: "LOADING"
  };
};
