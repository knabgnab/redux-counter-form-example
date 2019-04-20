//actions/index.js
import axios from 'axios';

export const increment = (score = 1) => ({
    type: 'INCREMENT',
    score
  });
  
export const decrement = (score = -1) => ({
    type: 'DECREMENT',
    score
  });

export const incrementTotal = () => ({
    type: 'INCREMENT_TOTAL',
  });

export const decrementTotal = () => ({
    type: 'DECREMENT_TOTAL',
  });

export const fetchItem = () => ({
    type: 'FETCH_ITEMS',
    payload: axios.get(`http://api.test/item`)
  });
  