 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import wikiPages from './wikiPages.js';

 const rootReducer = combineReducers({
  routing: routerReducer,
  wikiPages
 });

 export default rootReducer;
