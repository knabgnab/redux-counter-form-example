const initialState = [];

export default (state = initialState, action) => {
    console.log("action");
    switch (action.type) {
        case 'FETCH_ITEMS_PENDING':
            return state;
        case 'FETCH_ITEMS_FULFILLED':
            return [
                ...state,
                ...action.payload.data
            ];
        case 'FETCH_ITEMS_REJECTED':
            return state;
        case 'ADD_ITEM_PENDING':
            return state;
        case 'ADD_ITEM_FULFILLED':
            return [
                ...state,
                ...action.payload.data
            ];
        case 'FADD_ITEM_REJECTED':
            return state;
      default:
        return state;
    }
  };