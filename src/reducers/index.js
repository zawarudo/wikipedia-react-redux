import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wikiPages from './wikiPages.js';
import pageDetail from './pageDetail';

const rootReducer = combineReducers({
  routing: routerReducer,
  wikiPages,
  pageDetail
});

export default rootReducer;
