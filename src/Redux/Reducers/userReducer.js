const initialState = {
  user: {
    userId: null,
    token: null
  }
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};
