import {
  SET_BOOKMARK,
  UNSET_BOOKMARK
} from '../actions/actions.js';

export default function BookmarksReducer(state = [], action) {
  switch (action.type) {
    case SET_BOOKMARK:
      return [
        ...state,
        action.newBookmark
      ]
    case UNSET_BOOKMARK:
      return state.filter(page => page.pageid != action.page.pageid)
    default:
      return state;
  }
}