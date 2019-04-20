//reducers/counters.js

const initState = {
  total: 0,
  click: 0
};

export default (state = initState, action) => {
    switch (action.type) {
      case 'INCREMENT_TOTAL':
        return {
          total: state.total + 1,
          click: state.click + 1
        };
      case 'DECREMENT_TOTAL':
        return {
          total: state.total - 1,
          click: state.click + 1
        };
      default:
        return state;
    }
  };