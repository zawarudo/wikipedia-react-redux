import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import wikiPages from './wikiPages';
import pageDetail from './pageDetail';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
  routing: routerReducer,
  wikiPages,
  pageDetail,
  bookmarks
});

export default rootReducer;
