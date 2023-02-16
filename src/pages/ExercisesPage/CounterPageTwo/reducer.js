export const counterReducer = (state, { type }) => {
  switch (type) {
    case 'MINUS':
      return state - 1;

    case 'PLUS':
      return state + 1;

    default:
      return state;
  }
};
