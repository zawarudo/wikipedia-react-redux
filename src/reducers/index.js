import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wikiPages from './wikiPages';
import pageDetail from './pageDetail';
import bookmarks from './bookmarks';
import search from './search';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  wikiPages,
  pageDetail,
  bookmarks,
  search,
  form: formReducer
});

export default rootReducer;
