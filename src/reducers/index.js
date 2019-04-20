import { combineReducers } from 'redux';
import counters from './counters';
import totalClick from './totalClick';
import itemTable from './itemTable';

export default combineReducers({
  counters,
  totalClick,
  itemTable
});